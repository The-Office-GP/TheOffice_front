import React, {createContext, FC, useContext, useEffect} from "react";
import Header from "../pages/a_header/Header";
import {Outlet} from "react-router";
import Footer from "../pages/c_footer/Footer";
import {UserContext} from "../contexts/UserContext";
import {getUserInfo} from "../utilis/storage";
import {User} from "../_types/user";

const MainLayoutConnection: FC<{}> = ({}) => {
    const userContext = useContext(UserContext);

    //permet de vérifier si les infos utilisateurs sont toujours present dans le local storage quand le composant est chargé
    useEffect(() => {
        const userInfo = getUserInfo();
        if (userInfo) {
            const parsedUserInfo: User = JSON.parse(userInfo);
            if (userContext.userInfo?.username !== parsedUserInfo.username) {
                userContext.setUserInfo(parsedUserInfo);
            }
        }
    }, []);


    return (
        <>
            <Header userIsLogged={true} username={userContext.userInfo.username}/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayoutConnection;