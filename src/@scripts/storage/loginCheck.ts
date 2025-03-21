import {getUserInfo} from "../../utilis/storage";
import {UserType} from "../../@types/userType";
import {UserContextProps} from "../../contexts/UserContext";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {Dispatch, SetStateAction} from "react";
import {NavigateFunction} from "react-router";

//Permet de vérifier si les infos utilisateurs sont toujours present dans le local storage et de mettre à jour le context
export const userInfoCheck = (userContext:UserContextProps) => {
    const userInfo = getUserInfo();

    if (userInfo) {
        const parsedUserInfo: UserType = JSON.parse(userInfo);
        if (userContext.userInfo?.username !== parsedUserInfo.username) {
            userContext.setUserInfo(parsedUserInfo);
        }
    }
}

//Vérifie si le token est expiré
const isTokenExpired = (token: string) => {
    if (!token) return true;

    try {
        const decodedToken: JwtPayload = jwtDecode(token);
        const currentTime: number = Date.now() / 1000;
        if (decodedToken.exp !== undefined) {
            return decodedToken.exp < currentTime;
        }
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
};

export const deleteTokenExpired = (token:string, dispatch:any, setUserInfo:Dispatch<SetStateAction<UserType>>, navigate:NavigateFunction) => {
    if (isTokenExpired(token)) {
        dispatch({type: 'LOGOUT'});
        setUserInfo({id: 0, email: "", username: "", role: "", wallet: 0} as UserType)
        navigate("/")
    }
}