import {FC} from "react";
import Header from "../pages/a_header/Header";
import {Outlet} from "react-router";
import Footer from "../pages/c_footer/Footer";

const LayoutWithBar: FC<{}> = ({}) => {
    return (
        <>
                <Header/>
                <Outlet/>
                <Footer/>
        </>
    );
};

export default LayoutWithBar;