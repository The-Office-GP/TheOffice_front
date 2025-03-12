import {FC, useContext, useEffect, useState} from 'react';
import CreateCompanyCard from "../../components/main/userPage/CreateCompanyCard";
import "../../@styles/b_main/pages/OfficeBackground.css"
import CreateCompanyForm from "../../components/main/userPage/CreateCompanyForm";
import {CompanyType} from "../../_types/companyType";
import CompanyCard from "../../components/main/userPage/CompanyCard";
import {createCompanyData, sectorCompanyData} from "../../_data/createCompanyData";
import LockedCompanyCard from "../../components/main/userPage/LockedCompanyCard";
import {collectUserCompanies} from "../../@scripts/b_main/components/userPage/userPageScript";
import WalletCompanyPage from "../../components/main/userPage/WalletCompanyPage";
import {UserContext, UserContextProps} from "../../contexts/UserContext";

const UserPage: FC = () => {
    const [formIsVisible, setFormIsVisible] = useState<boolean>(false)
    const [arrayCompany, setArrayCompany] = useState<CompanyType[] | any>([])
    const [arrayIsUpdate, setArrayIsUpdate] = useState<boolean>(false)
    const user:UserContextProps = useContext(UserContext)
    const limitCompany = 3

    useEffect(() => {
        if(!arrayIsUpdate){
            collectUserCompanies(setArrayCompany, setArrayIsUpdate)
        }
    }, [arrayIsUpdate]);

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
                        {arrayCompany.length > 0 && arrayCompany.map((company: CompanyType, index: number) => (
                            <CompanyCard key={index} companyName={company.name}
                                         pathImages={createCompanyData[sectorCompanyData.indexOf(company.sector)].src}/>
                        ))}
                    </>
                    :
                    <CreateCompanyForm setFormIsVisible={setFormIsVisible} setArrayCompanyIsUpdate={setArrayIsUpdate}/>}
            </section>
        </>
    );
};

export default UserPage;