import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import BaseLayout from "./layouts/BaseLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Verify from "./pages/Verify";
import ClientSignup from "./pages/ClientSignup";
import AddService from "./pages/AddService";
import DashboardLayout from "./layouts/DashboardLayout";
import Services from "./pages/Services";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Orders from "./pages/Orders";
import Logout from "./pages/Logout";

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
        element: <SignUp />,
      },
      { path: "signup/client", element: <ClientSignup /> },
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
        element: <Explore />,
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
