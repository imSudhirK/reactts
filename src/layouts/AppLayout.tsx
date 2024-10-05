import { Layout } from "antd";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainRouter from "../routers/MainRouter";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto", // Use 'auto' for instant scrolling
      });
    }, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <Layout>
        <MainRouter />
      </Layout>
    </React.Fragment>
  );
};

export default AppLayout;
