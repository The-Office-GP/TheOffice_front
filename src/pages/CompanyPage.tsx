import {FC, useEffect, useState} from 'react';
import GameMenu from "../components/main/companyPage/GameMenu";
import MiniDashboard from "../components/main/companyPage/MiniDashboard";
import "../@styles/main/pages/companyPage.css"
import {useParams} from "react-router";
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

const CompanyPage: FC<{}> = ({}) => {
    const [company, setCompany] = useState<CompanyDetailsType>(companyDetailsDefault)
    const {id} = useParams()
    const [statePage, setStatePage] = useState<number>(0)
    const [url, setUrl] = useState<string>("")
    const [level, setLevel] = useState<string>("")
    const [maxEmployees, setMaxEmployees] = useState<number>()
    const [maxMachines, setMaxMachines] = useState<number>()

    useEffect(() => {
        const path: string = "/companies/" + id;
        collectCompanyInfos(path, (companyData:any) => {
            setCompany(companyData);
            setUrl(companyData.local.pathBackgroundImage);
            setLevel(companyData.local.level);
            setMaxEmployees(companyData.local.maxEmployees);
            setMaxMachines(companyData.local.maxMachines);
        });
    }, [id]);


    return (

        <CompanyContext.Provider value={{company, setCompany}}>
            <title>{company.name}</title>
            <section className={"background-company-model1-level1"}
                     style={{backgroundImage: `url(${process.env.PUBLIC_URL}${url})`}}>
                <MiniDashboard/>
                {statePage === 0 &&
                    <div className={"nav-mini-dashbord"}>
                        <GameMenu setPage={setStatePage}/>
                    </div>
                }
                {statePage === 1 && <GameDashboard setPage={setStatePage}/>}
                {statePage === 2 && <MachineBoard setPage={setStatePage}/>}
                {statePage === 3 && <EmployeeBoard setPage={setStatePage}/>}
                {statePage === 4 && <SimulationBoard setPage={setStatePage}/>}
                {statePage === 5 && <SupplierMarketPlaceBoard setPage={setStatePage}/>}
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


    );
};

export default CompanyPage;