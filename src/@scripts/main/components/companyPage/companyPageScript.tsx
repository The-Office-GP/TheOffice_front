import {getTheOfficeDbUser, putTheOfficeDbUser} from "../../../../api/theofficeApi";
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

export const saveCompanyInfo = async (id:number, company:CompanyDetailsType, setCompany:Dispatch<SetStateAction<CompanyDetailsType>>) => {
    try {
        const data = {
            sector: company.sector,
            name: company.name,
            popularity: company.popularity,
            userId: company.idUser,
            local: company.local,
            machines: company.machines,
            wallet: company.wallet,
            cycles: company.cycles,
            employees: company.employees,
            suppliers: company.suppliers,
            events: company.events,
            stockMaterials: company.stockMaterials,
            stockFinalMaterials: company.stockFinalMaterials,
            machinesInCompany: company.machinesInCompany,
        }
        console.log(data)
        const response = await putTheOfficeDbUser(`/companies/${id}`, data, getToken());
        setCompany(response.data)
    } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
    }
}