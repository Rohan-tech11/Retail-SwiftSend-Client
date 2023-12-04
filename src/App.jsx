import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import BaseLayout from "./layouts/BaseLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Verify from "./pages/Verify";
import ClientSignup from "./pages/ClientSignup";
import AddService from "./pages/AddService";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import DashboardLayout from "./layouts/DashboardLayout";
import Services from "./pages/Services";

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
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "client",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "services",
        element: <Services />,
        children: [{ path: "add", element: <AddService /> }],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
