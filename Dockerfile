# Use an official Node.js image as the base image for building
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the built static files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Install necessary packages and update
RUN apk update && \
    apk add --no-cache curl openssl

# Expose port 80
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
