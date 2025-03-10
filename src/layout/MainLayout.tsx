import React, {FC} from "react";
import Header from "../pages/a_header/Header";
import {Outlet} from "react-router";
import Footer from "../pages/c_footer/Footer";

const MainLayout: FC = () => {
    return (
        <>
                <Header userIsLogged={false} username={""}/>
                <Outlet/>
                <Footer/>
        </>
    );
};

export default MainLayout;