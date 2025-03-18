import {getTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";
import {Dispatch, SetStateAction} from "react";

export const collectUserCompanies = async (setArray: any, setArrayIsUpdate:Dispatch<SetStateAction<boolean>>) => {
    try {
        const response = await getTheOfficeDbUser('/companies/user', getToken())
        setArray(response)
        setArrayIsUpdate(true)
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    }
};