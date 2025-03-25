import {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import "../../../../@styles/main/components/global/buttons/StartSimulationButton.css"
import {putTheOfficeDbUser} from "../../../../api/theofficeApi";
import {CompanyDetailsType, CycleType, LocalType, Statistic} from "../../../../@types/companyType";
import {MachineShortType, MachineType} from "../../../../@types/MachineType";
import {EmployeeType} from "../../../../@types/employeeType";
import {StockFinalMaterialsType, StockMaterialsType} from "../../../../@types/stockMaterialsType";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {UserContext} from "../../../../contexts/UserContext";
import companyPage from "../../../../pages/CompanyPage";
import {companyDetailsDefault} from "../../../../@data/companyValueDefault";
import {collectCompanyInfos, saveCompanyInfo} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {useParams} from "react-router";
import {saveUserInfo} from "../../../../utilis/storage";



const StartSimulationButton: FC<{ setPage: Dispatch<SetStateAction<number>>, cycle: CycleType}> = ({setPage, cycle}) => {
    const {id} = useParams()
    const [company, setCompany] = useState<CompanyDetailsType>(companyDetailsDefault)

    useEffect(() => {
        const path: string = "/companies/" + Number(id)
        collectCompanyInfos(path, setCompany)
    }, []);

    const handleCompanyCycle = () => {
        const companyForCycle:CompanyDetailsType = {
            id: company.id,
            sector: company.sector,
            name: company.name,
            popularity: company.popularity,
            idUser: company.idUser,
            local: company.local,
            wallet: company.wallet,
            cycle: cycle,
            machines: company.machines,
            employees: company.employees,
            suppliers: company.suppliers,
            events: company.events,
            stockMaterial: company.stockMaterial,
            stockFinalMaterials: company.stockFinalMaterials,
            machinesInCompany: company.machinesInCompany,
            statistics: company.statistics
        }
        setPage(6)
        saveCompanyInfo(Number(id), companyForCycle, setCompany)
    }
    return (
        <>
            <button className={"start-simulation-button"} onClick={handleCompanyCycle}>Lancer le cycle</button>
        </>
    )
}
export default StartSimulationButton;