import { Layout } from "antd";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainRouter from "../routers/main-router";

const AppLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "auto"
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
