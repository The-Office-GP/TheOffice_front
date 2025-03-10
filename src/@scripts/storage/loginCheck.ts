import {getUserInfo} from "../../utilis/storage";
import {User} from "../../_types/user";
import {UserContextProps} from "../../contexts/UserContext";

//Permet de vérifier si les infos utilisateurs sont toujours present dans le local storage et de mettre à jour le context
export const userInfoCheck = (userContext:UserContextProps) => {
    const userInfo = getUserInfo();

    if (userInfo) {
        const parsedUserInfo: User = JSON.parse(userInfo);
        if (userContext.userInfo?.username !== parsedUserInfo.username) {
            userContext.setUserInfo(parsedUserInfo);
        }
    }
}