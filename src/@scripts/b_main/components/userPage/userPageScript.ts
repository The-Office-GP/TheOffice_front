import {getTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";

export const collectUserCompanies = async (setArray: any) => {
    try {
        const response = await getTheOfficeDbUser('/companies/user', getToken())
        setArray(response)
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    }
};