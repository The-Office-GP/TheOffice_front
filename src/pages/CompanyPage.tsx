import {FC, useContext, useEffect, useState} from 'react';
import GameMenu from "../components/main/companyPage/GameMenu";
import MiniDashboard from "../components/main/companyPage/MiniDashboard";
import "../@styles/main/pages/companyPage.css"
import {Route, useParams} from "react-router";
import GameDashboard from "../components/main/companyPage/boards/GameDashboard";
import {CompanyDetailsType} from "../@types/companyType";
import {companyDetailsDefault} from "../@data/companyValueDefault";
import EmployeeBoard from "../components/main/companyPage/boards/EmployeeBoard";
import {CompanyContext} from "../contexts/CompanyContext";



import MachineBoard from "../components/main/companyPage/boards/MachineBoard";
import SimulationBoard from "../components/main/companyPage/boards/SimulationBoard";

import {collectCompanyInfos} from "../@scripts/main/components/companyPage/companyPageScript";

import SupplierMarketPlaceBoard from "../components/main/companyPage/boards/SupplierMarketPlaceBoard";
import SimulationTreeMonthsResultsBoard from "../components/main/companyPage/boards/SimulationTreeMonthsResultsBoard";
import {getTheOfficeDbUser} from "../api/theofficeApi";
import {getToken} from "../utilis/storage";

export async function loader({params}: Route.LoaderArgs) {
    const contextCompany = useContext(CompanyContext);
    const path: string = "/companies/" + params.id;

    const response = await getTheOfficeDbUser(path, getToken());
    contextCompany.setCompany(response) ;
}

const CompanyPage: FC<{}> = ({}) => {
    const {id} = useParams()
    const [statePage, setStatePage] = useState<number>(0)
    const [company, setCompany] = useState<CompanyDetailsType>(companyDetailsDefault)
    const [url, setUrl] = useState<string>("")
    const [level, setLevel] = useState<string>("")
    const [maxEmployees, setMaxEmployees] = useState<number>()
    const [maxMachines, setMaxMachines] = useState<number>()


    useEffect(() => {
        setUrl(company.local.pathBackgroundImage);
        setLevel(company.local.level);
        setMaxEmployees(company.local.maxEmployees);
        setMaxMachines(company.local.maxMachines);
    }, []);

    return (

        <>
            <title>{company.name}</title>
            <CompanyContext.Provider value={{company, setCompany}}>
                <section className={"background-company-model1-level1"}
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}${url})`}}>
                    {statePage === 0 &&
                        <div className={"nav-mini-dashbord"}>
                            <GameMenu setPage={setStatePage}/>
                            <MiniDashboard company={company}/>
                        </div>
                    }
                    {statePage === 1 && <GameDashboard setPage={setStatePage}/>}
                    {statePage === 2 && <MachineBoard setPage={setStatePage}/>}
                    {statePage === 3 && <EmployeeBoard setPage={setStatePage}/>}
                    {statePage === 4 && <SimulationBoard setPage={setStatePage}/>}
                    {statePage === 5 && <SupplierMarketPlaceBoard setPage={setStatePage} company={company}/>}
                    {statePage === 6 && <SimulationTreeMonthsResultsBoard setPage={setStatePage}/>}
                    <div className="level-container">
                        <h3 className="level">{level}</h3>
                        <div className="tooltip">
                            <strong>Niveau actuel :</strong> {level} <br/>
                            <strong>Nombre de salariés maximum :</strong> {maxEmployees}<br/>
                            <strong>Nombre de machines maximum :</strong> {maxMachines}<br/>
                        </div>
                    </div>
                </section>
            </CompanyContext.Provider>

        </>

    );
};

export default CompanyPage;