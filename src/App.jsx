import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import BaseLayout from "./layouts/BaseLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Verify from "./pages/Verify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "about", element: <About /> },
      { path: "verify", element: <Verify /> },
    ],
  },
]);

function App() {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode: prefersDarkMode ? "dark" : "light",
  //       },
  //     }),
  //   [prefersDarkMode]
  // );

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
