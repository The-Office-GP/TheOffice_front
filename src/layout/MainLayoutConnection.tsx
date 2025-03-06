import React, {FC} from "react";
import Header from "../pages/a_header/Header";
import {Outlet} from "react-router";
import Footer from "../pages/c_footer/Footer";
import {User} from "../_types/user";
import {getUserInfo} from "../utilis/storage";

const MainLayoutConnection: FC<{}> = ({}) => {
    let user: User | null = null;

    const username = () => {
        const userInfo = getUserInfo();
        if (userInfo !== null) {
            user = JSON.parse(userInfo);
            console.log(user?.username);
        }
        return user ? user.username : "";
    };

    return (
        <>
            <Header userIsLogged={true} username={username()}/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayoutConnection;