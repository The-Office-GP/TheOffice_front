import {FC, useState} from 'react';
import CreateCompanyCard from "../../components/main/createCompany/CreateCompanyCard";
import "../../@styles/b_main/pages/OfficeBackground.css"
import CreateCompanyForm from "../../components/main/createCompany/CreateCompanyForm";
const CreateCompanyPage: FC<{}> = ({}) => {
    const [formIsVisible, setFormIsVisible] = useState<boolean>(false)

    return (
        <>
            <section className={"office-background"}>
                {!formIsVisible ? (
                    <>
                        <CreateCompanyCard setFormIsVisible={setFormIsVisible}/>
                    </>
                    ):
                    <CreateCompanyForm setFormIsVisible={setFormIsVisible}/>}
            </section>
        </>
    );
};

export default CreateCompanyPage;