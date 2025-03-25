import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import SimulationTable from "../table/SimulationTable";
import ContinueButton from "../buttons/ContinueButton";
import "../../../../@styles/main/components/companyPage/simulation/SimulationBoard.css"
import "../../../../@styles/main/components/companyPage/simulation/SimulationTreeMonthsResultsBoard.css"
import {collectCompanyInfos} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {CompanyDetailsType} from "../../../../@types/companyType";
import {useParams} from "react-router";
import {companyDetailsDefault} from "../../../../@data/companyValueDefault";

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
                <h2>Bilan trimestriel</h2>
                <div className={"simulation-results-container"}>
                    <p>Chiffre d'affaire: {company.statistics[company.statistics.length-1].totalIncomes} €</p>
                    <p>Total des charge: {company.statistics[company.statistics.length - 1].totalExpenses}€ </p>
                    <p>Total des production: {company.statistics[company.statistics.length - 1].product1LowQtyProd + company.statistics[company.statistics.length - 1].product1MidQtyProd + company.statistics[company.statistics.length - 1].product1HighQtyProd }</p>
                    <p>Cotte de popularité: {company.statistics[company.statistics.length - 1].popularity}</p>
                    <SimulationTable/>
                </div>
                <ContinueButton setPage={setPage}/>
            </div>
        </>
    );
};

export default SimulationTreeMonthsResultsBoard;