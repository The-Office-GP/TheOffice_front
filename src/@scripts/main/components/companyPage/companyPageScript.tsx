import {getTheOfficeDbUser, putTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken, getUserInfo, saveUserInfo} from "../../../../utilis/storage";
import {Dispatch, SetStateAction} from "react";
import {CompanyDetailsType} from "../../../../@types/companyType";
import {UserType} from "../../../../@types/userType";

export const collectCompanyInfos = async (path:string, setCompany:Dispatch<SetStateAction<CompanyDetailsType>>) => {
    try {
        const response = await getTheOfficeDbUser(path, getToken());
        setCompany(response)
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    }finally {

    }
};

export const saveCompanyInfo = async (id:number, company:CompanyDetailsType, setCompany:Dispatch<SetStateAction<CompanyDetailsType>>) => {
    try {
        const data = {
            sector: company.sector,
            name: company.name,
            popularity: company.popularity,
            userId: company.userId,
            local: company.local,
            machines: company.machines,
            wallet: company.wallet,
            cycle: company.cycle,
            employees: company.employees,
            suppliers: company.suppliers,
            events: company.events,
            stockMaterial: company.stockMaterial,
            stockFinalMaterials: company.stockFinalMaterials,
            machinesInCompany: company.machinesInCompany,
            statistics: company.statistic,
        }
        const path = "/companies/" + id;
        const response = await putTheOfficeDbUser(path, data, getToken());
        setCompany(response.data)
    } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
    }
}

export const saveCompanyInfo2 = async (id: number, company: CompanyDetailsType, setCompany: Dispatch<SetStateAction<CompanyDetailsType>>) => {
    try {
        const data = {
            sector: company.sector,
            name: company.name,
            popularity: company.popularity,
            userId: company.userId,
            local: company.local,
            machines: company.machines,
            wallet: company.wallet,
            cycle: company.cycle,
            employees: company.employees,
            suppliers: company.suppliers,
            events: company.events,
            stockMaterial: company.stockMaterial,
            stockFinalMaterials: company.stockFinalMaterials,
            machinesInCompany: company.machinesInCompany,
            statistic: company.statistic,
        }
        const path = "/companies/cycle/" + id;
        const response = await putTheOfficeDbUser(path, data, getToken());
        const userInfo = getUserInfo()
        if (userInfo) {
            const parsedUserInfo = JSON.parse(userInfo)
            saveUserInfo(
                {
                    id: parsedUserInfo.id,
                    email: parsedUserInfo.email,
                    username: parsedUserInfo.username,
                    role: parsedUserInfo.role,
                    wallet: response.data.wallet,
                } as UserType
            )
        }
        setCompany(response.data)
    } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
    }
}