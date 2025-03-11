import {FC, useContext, useEffect, useState} from 'react';
import CreateCompanyCard from "../../components/main/companyPage/CreateCompanyCard";
import "../../@styles/b_main/pages/OfficeBackground.css"
import CreateCompanyForm from "../../components/main/companyPage/CreateCompanyForm";
import {Company} from "../../_types/company";
import CompanyCard from "../../components/main/companyPage/CompanyCard";
import {createCompanyData, sectorCompanyData} from "../../_data/createCompanyData";
import LockedCompanyCard from "../../components/main/companyPage/LockedCompanyCard";
import {collectUserCompanies} from "../../@scripts/b_main/components/companyPage/companyPageScript";
import WalletCompanyPage from "../../components/main/companyPage/WalletCompanyPage";
import {UserContext} from "../../contexts/UserContext";

const CompanyPage: FC = () => {
    const [formIsVisible, setFormIsVisible] = useState<boolean>(false)
    const [arrayCompany, setArrayCompany] = useState<Company[] | any>([])
    const user = useContext(UserContext)
    const limitCompany = 2

    useEffect(() => {
        collectUserCompanies(setArrayCompany)
    }, []);

    return (
        <>
            <section className={"office-background"}>
                <WalletCompanyPage walletValue={user.userInfo.wallet}/>
                {!formIsVisible ?
                    <>
                        {arrayCompany.length >= limitCompany ?
                            <LockedCompanyCard/>
                            :
                            <CreateCompanyCard setFormIsVisible={setFormIsVisible}/>
                        }
                        {arrayCompany.length > 0 && arrayCompany.map((company: Company, index: number) => (
                            <CompanyCard key={index} companyName={company.name}
                                         pathImages={createCompanyData[sectorCompanyData.indexOf(company.sector)].src}/>
                        ))}
                    </>
                    :
                    <CreateCompanyForm setFormIsVisible={setFormIsVisible}/>}
            </section>
        </>
    );
};

export default CompanyPage;