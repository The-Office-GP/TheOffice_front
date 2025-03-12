import {getTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";
import {CompanyType} from "../../../../_types/companyType";

export const collectUserCompanies = async (array:any, setArray: any) => {
    try {
        const response = await getTheOfficeDbUser('/companies/user', getToken())
        const arrayResponse:CompanyType[] = response
        if(array.length !== arrayResponse.length){
            setArray(response)
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    }
};