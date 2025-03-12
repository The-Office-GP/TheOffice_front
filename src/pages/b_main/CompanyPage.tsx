import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import GameMenu from "../../components/main/companyPage/GameMenu";
import MiniDashboard from "../../components/main/companyPage/MiniDashboard";
import "../../@styles/b_main/pages/companyPage.css"
import {useParams} from "react-router";
import {getTheOfficeDbUser} from "../../api/theofficeApi";
import {getToken} from "../../utilis/storage";

const CompanyPage: FC<{}> = ({}) => {
    const {id} = useParams()
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

            const base64Image = response.local.background_image;

            if (base64Image && base64Image.startsWith('iVBOR')) {
                const byteArray = Uint8Array.from(atob(base64Image), c => c.charCodeAt(0));
                const blob = new Blob([byteArray], {type: 'image/png'});
                const imageUrl = URL.createObjectURL(blob);
                setUrl(imageUrl);
            } else {
                console.error('Image en base64 invalide');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };


    return (
        <section className={"background-company-model1-level1"} style={{backgroundImage: `url(${url})`}}>
            <div className={"nav-mini-dashbord"}>
                <GameMenu/>
                <MiniDashboard/>
            </div>
            <h3 className={"level"}>Niveau 1</h3>
        </section>
    );
};

export default CompanyPage;
