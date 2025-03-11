import {UserType} from "../../_types/userType";
import {NavigateFunction} from "react-router";
import {UserContextProps} from "../../contexts/UserContext";

export const handleDashboard = (navigate:NavigateFunction) => {
    navigate("/dashboard");
}

export const handleSettings = (navigate: NavigateFunction) => {
    navigate("/paramètres")
}

//Déconnecte l'utilisateur
export const handleLogout = (navigate: NavigateFunction, dispatch:any, userContext:UserContextProps) => {
    dispatch({type: 'LOGOUT'});
    userContext.setUserInfo({id: 0, email: "", username: "", role: "", wallet:0} as UserType)
    navigate("/")
}