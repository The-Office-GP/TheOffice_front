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
import {
    collectCompanyInfos,
    saveCompanyInfo,
    saveCompanyInfo2
} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {useParams} from "react-router";
import {saveUserInfo} from "../../../../utilis/storage";



const StartSimulationButton: FC<{ setPage: Dispatch<SetStateAction<number>>, productionSpeed:number, priorityProduction:number, priorityMarketing:number , product1:number,
    product2: number,
    product3: number,
    product4: number}> = ({setPage, productionSpeed,priorityProduction,priorityMarketing, product1, product2, product3, product4}) => {
    const {id} = useParams()
    const contextCompany = useContext(CompanyContext)

    useEffect(() => {
        console.log(contextCompany.company)
    }, []);

    const handleCompanyCycle = () => {
        const companyForCycle: CompanyDetailsType = {
            id: Number(id),
            sector: contextCompany.company.sector,
            name: contextCompany.company.name,
            popularity: contextCompany.company.popularity,
            userId: contextCompany.company.userId,
            local: contextCompany.company.local,
            wallet: contextCompany.company.wallet,
            cycle: {...contextCompany.company.cycle,
                productionSpeed:productionSpeed,
                priorityProduction:priorityProduction,
                priorityMarketing:priorityMarketing

            },
            machines: contextCompany.company.machines,
            employees: contextCompany.company.employees,
            suppliers: contextCompany.company.suppliers,
            events: contextCompany.company.events,
            stockMaterial: contextCompany.company.stockMaterial,
            stockFinalMaterials:[
            {
                ...contextCompany.company.stockFinalMaterials[0],
                proportionProduct: product1
            },
                {
                    ...contextCompany.company.stockFinalMaterials[1],
                    proportionProduct: product2 // Assume `product1` is a predefined variable
                },
                {
                    ...contextCompany.company.stockFinalMaterials[2],
                    proportionProduct: product2 // Assume `product1` is a predefined variable
                },
                {
                    ...contextCompany.company.stockFinalMaterials[3],
                    proportionProduct: product4 // Assume `product1` is a predefined variable
                }

        ],
            machinesInCompany: contextCompany.company.machinesInCompany,
            statistic: contextCompany.company.statistic
        };

        console.log(companyForCycle)
        setPage(6)
        saveCompanyInfo2(Number(id), companyForCycle, contextCompany.setCompany)
    }
    return (
        <>
            <button className={"start-simulation-button"} onClick={handleCompanyCycle}>Lancer le cycle</button>
        </>
    )
}
export default StartSimulationButton;