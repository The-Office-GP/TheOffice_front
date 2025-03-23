import {FC} from 'react';
import "../@styles/main/pages/OfficeBackground.css";
import UpdateForm from "../components/main/homePage/UpdateForm";

const SettingPage: FC<{}> = ({}) => {

    return (
        <>
            <title>Mes paramètres</title>
            <section className={"office-background"}>
                <UpdateForm/>

            </section>
        </>
    );
};

export default SettingPage;
