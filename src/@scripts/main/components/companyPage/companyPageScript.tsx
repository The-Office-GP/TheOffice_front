import {getTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";
import {Dispatch, SetStateAction} from "react";
import {CompanyDetailsType} from "../../../../@types/companyType";

export const collectCompanyInfos = async (path:string, setCompany:Dispatch<SetStateAction<CompanyDetailsType>>) => {
    try {
        const response = await getTheOfficeDbUser(path, getToken());
        setCompany(response)
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    }
};