import {FC, useEffect, useState} from 'react';
import GameMenu from "../../components/main/companyPage/GameMenu";
import MiniDashboard from "../../components/main/companyPage/MiniDashboard";
import "../../@styles/b_main/pages/companyPage.css"
import {useParams} from "react-router";
import {getTheOfficeDbUser} from "../../api/theofficeApi";
import {getToken} from "../../utilis/storage";
import GameDashboard from "../../components/main/companyPage/GameDashboard";

const CompanyPage: FC<{}> = ({}) => {
    const {id} = useParams()
    const [statePage, setStatePage] = useState<number>(0)
    const [url, setUrl] = useState<string>("")

    useEffect(() => {
        collectCompanyInfos()
    }, []);

    useEffect(() => {
        console.log(url)
    }, [url]);

    const collectCompanyInfos = async () => {
        try {
            const response = await getTheOfficeDbUser(`/companies/${id}`, getToken());
            console.log(response);

            setUrl(response.local.path_background_image);
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
            <h3 className={"level"}>Niveau 1</h3>
        </section>
    );
};

export default CompanyPage;
