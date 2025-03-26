import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import SimulationTable from "../table/SimulationTable";
import ContinueButton from "../buttons/ContinueButton";
import "../../../../@styles/main/components/companyPage/simulation/SimulationBoard.css"
import "../../../../@styles/main/components/companyPage/simulation/SimulationTreeMonthsResultsBoard.css"
import {collectCompanyInfos} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {CompanyDetailsType} from "../../../../@types/companyType";
import {useParams} from "react-router";
import {companyDetailsDefault} from "../../../../@data/companyValueDefault";
import DashboardExitButton from "../../../share/DashboardExitButton";

const SimulationTreeMonthsResultsBoard: FC<{ setPage: Dispatch<SetStateAction<number>> }> = ({setPage}) => {
    const {id} = useParams();
    const [company, setCompany] = useState<CompanyDetailsType>(companyDetailsDefault)

    useEffect(() => {
        const path: string = "/companies/" + Number(id)
        collectCompanyInfos(path, setCompany)
    }, []);

    return (
        <>
            <div className={"simulation-container"}
                 style={{backgroundImage: "url('/assets/simulation-background/Simulation-background.png')"}}>
                <DashboardExitButton setPage={setPage}/>
                <h2>Bilan trimestriel</h2>
                <div className={"simulation-results-container"}>
                    <p>Chiffre d'affaire: {company.statistic.length > 0 ? company.statistic[company.statistic.length-1].totalIncomes : 0} €</p>
                    <p>Total des charge: {company.statistic.length > 0 ? company.statistic[company.statistic.length - 1].totalExpenses : 0}€ </p>
                    <p>Total des production: {company.statistic.length > 0 ? company.statistic[company.statistic.length - 1].product1LowQtyProd + company.statistic[company.statistic.length - 1].product1MidQtyProd + company.statistic[company.statistic.length - 1].product1HighQtyProd : 0}</p>
                    <p>Côte de popularité: {company.statistic.length > 0 ? company.statistic[company.statistic.length - 1].popularity : 0}</p>
                    <SimulationTable/>
                </div>
                <ContinueButton setPage={setPage}/>
            </div>
        </>
    );
};

export default SimulationTreeMonthsResultsBoard;