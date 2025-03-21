import React, {FC, useContext, useEffect} from "react";
import Header from "./header/Header";
import {Outlet} from "react-router";
import Footer from "./footer/Footer";
import {UserContext} from "../contexts/UserContext";
import {userInfoCheck} from "../@scripts/storage/loginCheck";

const MainLayoutConnection: FC = () => {
    const userContext = useContext(UserContext);

    //Quand le composant est chargé. On vérifie dans le local storage les informations de l'utilisateur
    useEffect(() => {
        userInfoCheck(userContext);
    }, [userContext]);


    return (
        <>
            <Header userIsLogged={true} username={userContext.userInfo.username}/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayoutConnection;