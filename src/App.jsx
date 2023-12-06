import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/common/Login";
import SignUp from "./pages/common/Signup";
import BaseLayout from "./layouts/BaseLayout";
import Homepage from "./pages/common/Homepage";
import About from "./pages/common/About";
import Verify from "./pages/common/Verify";
import ClientSignup from "./pages/client/ClientSignup";
import AddService from "./pages/client/AddService";
import DashboardLayout from "./layouts/DashboardLayout";
import Services from "./pages/client/Services";
import ErrorPage from "./pages/common/ErrorPage";
import Dashboard from "./pages/user/Dashboard";
import Explore from "./pages/user/Explore";
import Orders from "./pages/user/Orders";
import Logout from "./pages/common/Logout";
import ClientDashboard from "./pages/client/ClientDashboard";
import ServiceDetails from "./pages/user/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "login", element: <Login /> },
      {
        path: "signup",
        children: [
          {
            index: true,
            element: <SignUp />,
          },
          {
            path: "client",
            element: <ClientSignup />,
          },
        ],
      },
      { path: "about", element: <About /> },
      { path: "verify", element: <Verify /> },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "client",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ClientDashboard />

      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <Services />,
          },
          {
            path: "add",
            element: <AddService />,
          },
        ],
      },
    ],
  },
  {
    path: "user",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "explore",
        children: [
          {
            index: true,
            element: <Explore />,
          },
          {
            path: ":serviceId",
            element: <ServiceDetails />
          }
        ]
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
