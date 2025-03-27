import {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import SimulationTable from "../table/SimulationTable";
import ContinueButton from "../buttons/ContinueButton";
import "../../../../@styles/main/components/companyPage/simulation/SimulationBoard.css"
import "../../../../@styles/main/components/companyPage/simulation/SimulationTreeMonthsResultsBoard.css"
import {collectCompanyInfos} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {CompanyDetailsType} from "../../../../@types/companyType";
import {useParams} from "react-router";
import {companyDetailsDefault} from "../../../../@data/companyValueDefault";
import DashboardExitButton from "../../../share/DashboardExitButton";
import RandomText from "./simulation-component/RandomText";
import LoaderResultCycle from "./simulation-component/LoaderResultCycle";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {getUserInfo, saveUserInfo} from "../../../../utilis/storage";
import {UserType} from "../../../../@types/userType";

const SimulationTreeMonthsResultsBoard: FC<{ setPage: Dispatch<SetStateAction<number>> }> = ({setPage}) => {
    const {id} = useParams();
    const [resultIsReady, setResultIsReady] = useState<boolean>(false)
    const contextCompany = useContext(CompanyContext)

    useEffect(() => {
        const path: string = "/companies/" + Number(id)
        collectCompanyInfos(path, contextCompany.setCompany)
        setTimeout(() => {
            setResultIsReady(true);
        }, 5000);
    }, []);

    return (
        <>
            {resultIsReady ?
                <div className={"simulation-container"}
                     style={{backgroundImage: "url('/assets/simulation-background/Simulation-background.png')"}}>
                    <DashboardExitButton setPage={setPage}/>
                    <h2>Bilan trimestriel</h2>
                    <div className={"simulation-results-container"}>
                        <p>Chiffre
                            d'affaire: {contextCompany.company.statistic.length > 0 ? contextCompany.company.statistic[contextCompany.company.statistic.length - 1].totalIncomes : 0} €</p>
                        <p>Total des
                            charge: {contextCompany.company.statistic.length > 0 ? contextCompany.company.statistic[contextCompany.company.statistic.length - 1].totalExpenses : 0}€ </p>
                        <p>Total des
                            production: {contextCompany.company.statistic.length > 0 ? contextCompany.company.statistic[contextCompany.company.statistic.length - 1].product1LowQtyProd + contextCompany.company.statistic[contextCompany.company.statistic.length - 1].product1MidQtyProd + contextCompany.company.statistic[contextCompany.company.statistic.length - 1].product1HighQtyProd : 0}</p>
                        <p>Côte de
                            popularité: {contextCompany.company.statistic.length > 0 ? contextCompany.company.statistic[contextCompany.company.statistic.length - 1].popularity : 0}</p>
                        <SimulationTable/>
                    </div>
                    <ContinueButton setPage={setPage}/>
                </div>
            :
                <div className={"simulation-container"}
                     style={{backgroundImage: "url('/assets/simulation-background/Simulation-background.png')"}}>
                    <RandomText text={"Dis donc tu manges hein"} xInitial={"10%"} yInitial={"10%"}/>
                    <RandomText text={"Tu penses quoi des pâtes aux oeufs ?"} xInitial={"40%"}
                                yInitial={"70%"}/>
                    <RandomText text={"C'est une très bonne remarque"} xInitial={"60%"} yInitial={"10%"}/>
                    <RandomText text={"Ton dernier projet c'est un concert de saxophone"} xInitial={"25%"} yInitial={"28%"}/>
                    <LoaderResultCycle/>
                </div>
            }
        </>
    );
};

export default SimulationTreeMonthsResultsBoard;