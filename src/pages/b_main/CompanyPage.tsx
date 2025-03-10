import {FC, useEffect, useState} from 'react';
import CreateCompanyCard from "../../components/main/companyPage/CreateCompanyCard";
import "../../@styles/b_main/pages/OfficeBackground.css"
import CreateCompanyForm from "../../components/main/companyPage/CreateCompanyForm";
import {getToken} from "../../utilis/storage";
import {getTheOfficeDbUser} from "../../api/theofficeApi";
import {Company} from "../../_types/company";
import CompanyCard from "../../components/main/companyPage/CompanyCard";
import {createCompanyData, sectorCompanyData} from "../../_data/createCompanyData";
import LockedCompanyCard from "../../components/main/companyPage/LockedCompanyCard";

const CompanyPage: FC = () => {
    const [formIsVisible, setFormIsVisible] = useState<boolean>(false)
    const [arrayCompany, setArrayCompany] = useState<Company[]|any>([])
    const limitCompany = 2

    useEffect(() => {
        collectUserCompanies()
    }, []);

    useEffect(() => {
        if(arrayCompany.length > 0){
            console.log(arrayCompany)
        }
    }, [arrayCompany]);

    const collectUserCompanies = async () => {
        try {
            const response = await getTheOfficeDbUser('/companies/user', getToken())
            setArrayCompany(response)
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };

    return (
        <>
            <section className={"office-background"}>
                {!formIsVisible ?
                    <>
                        {arrayCompany.length >= limitCompany ?
                            <LockedCompanyCard/>
                            :
                            <CreateCompanyCard setFormIsVisible={setFormIsVisible}/>
                        }
                        {arrayCompany.length > 0 && arrayCompany.map((company:Company, index:number) => (
                            <CompanyCard key={index} companyName={company.name} pathImages={createCompanyData[sectorCompanyData.indexOf(company.sector)].src}/>
                        ))}
                    </>
                    :
                    <CreateCompanyForm setFormIsVisible={setFormIsVisible}/>}
            </section>
        </>
    );
};

export default CompanyPage;