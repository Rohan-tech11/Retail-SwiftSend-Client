import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function BaseLayout() {
  const location = useLocation();

  const hideFooterPaths = ["/signup", "/login", "/signup/client"];

  const isFooterHidden = hideFooterPaths.includes(location.pathname);

  return (
    <>
      <Header />
      <Outlet />
      {!isFooterHidden && <Footer />}
    </>
  );
}

export default BaseLayout;
