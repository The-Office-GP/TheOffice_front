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
    const {id} = useParams()
    const [statePage, setStatePage] = useState<number>(0)
    const [company, setCompany] = useState<CompanyDetailsType>(companyDetailsDefault)
    const [url, setUrl] = useState<string>("")
    const [level, setLevel] = useState<string>("")

    useEffect(() => {
        const path:string = "/companies/"+id
        collectCompanyInfos(path, setCompany)
    }, []);

    useEffect(() => {
        setUrl(company.local.pathBackgroundImage);
        setLevel(company.local.level);
    }, [company]);


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
                    <h3 className={"level"}>{level}</h3>
                </section>
            </CompanyContext.Provider>

</>
    );
};

export default CompanyPage;