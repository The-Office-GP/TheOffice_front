import {Dispatch, SetStateAction} from "react";
import {UserType} from "../../@types/userType";
import {postTheOfficeDb, putTheOfficeDbUser} from "../../api/theofficeApi";
import {getToken} from "../../utilis/storage";

export const saveUserInfoInDb = async (data: UserType) => {
    try {
        await putTheOfficeDbUser(`/users/${data.id}`, data, getToken());
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    }
}