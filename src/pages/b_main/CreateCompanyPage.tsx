import {FC} from 'react';
import CreateCompanyCard from "../../components/main/createCompany/CreateCompanyCard";
import "../../@styles/b_main/pages/OfficeBackground.css"
const CreateCompanyPage: FC<{}> = ({}) => {
    return (
        <>
            <section className={"office-background"}>
                <CreateCompanyCard/>
            </section>
        </>
    );
};

export default CreateCompanyPage;