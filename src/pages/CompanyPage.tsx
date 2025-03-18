import {FC, useContext, useEffect, useState} from 'react';
import GameMenu from "../components/main/companyPage/GameMenu";
import MiniDashboard from "../components/main/companyPage/MiniDashboard";
import "../@styles/main/pages/companyPage.css"
import {useParams} from "react-router";
import {getTheOfficeDbUser} from "../api/theofficeApi";
import {getToken} from "../utilis/storage";
import GameDashboard from "../components/main/companyPage/GameDashboard";
import {CompanyDetailsType} from "../@types/companyType";
import {companyDetailsDefault} from "../@data/companyValueDefault";
import EmployeeBoard from "../components/main/companyPage/EmployeeBoard";
import {CompanyContext} from "../contexts/CompanyContext";

const CompanyPage: FC<{}> = ({}) => {
    const {id} = useParams()
    const [statePage, setStatePage] = useState<number>(0)
    const companyContext = useContext(CompanyContext);
    const [url, setUrl] = useState<string>("")
    const [level, setLevel] = useState<string>("")

    useEffect(() => {
        collectCompanyInfos()
    }, []);

    useEffect(() => {
        console.log(url)
    }, [url]);

    useEffect(() => {
        console.log(level)
    }, [level]);

    const collectCompanyInfos = async () => {
        try {
            const response = await getTheOfficeDbUser(`/companies/${id}`, getToken());
            companyContext.setCompany(response)

            setUrl(companyContext.company.local.background_image);
            setLevel(companyContext.company.local.level);
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };


    return (
        <section className={"background-company-model1-level1"}
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}${url})`}}
        >
            {statePage === 0 &&
                <div className={"nav-mini-dashbord"}>
                    <GameMenu setPage={setStatePage}/>
                    <MiniDashboard/>
                </div>
            }
            {statePage === 1 && <GameDashboard setPage={setStatePage}/>}
            {statePage === 1 && <EmployeeBoard/>}
            <h3 className={"level"}>{level}</h3>
        </section>
    );
};

export default CompanyPage;
