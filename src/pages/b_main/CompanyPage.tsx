import {FC, useEffect} from 'react';
import GameMenu from "../../components/main/companyPage/GameMenu";
import MiniDashboard from "../../components/main/companyPage/MiniDashboard";
import "../../@styles/b_main/pages/companyPage.css"
import {useParams} from "react-router";

const CompanyPage: FC<{}> = ({}) => {
    const {id} = useParams()

    useEffect(() => {
        console.log(id)
    }, []);
    return (
        <section className={"background-company-model1-level1"}>
            <div className={"nav-mini-dashbord"}>
                <GameMenu/>
                <MiniDashboard/>
            </div>
            <h3 className={"level"}>Niveau 1</h3>
        </section>
    );
};

export default CompanyPage;
