import React, {FC} from "react";
import Header from "./header/Header";
import {Outlet} from "react-router";
import Footer from "./footer/Footer";

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