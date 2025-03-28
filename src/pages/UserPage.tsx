import {FC, useContext, useEffect, useState} from 'react';
import CreateCompanyCard from "../components/main/userPage/CreateCompanyCard";
import "../@styles/main/pages/OfficeBackground.css";
import CreateCompanyForm from "../components/main/userPage/CreateCompanyForm";
import {CompanyType} from "../@types/companyType";
import CompanyCard from "../components/main/userPage/CompanyCard";
import {createCompanyData, sectorCompanyData} from "../@data/createCompanyData";
import LockedCompanyCard from "../components/main/userPage/LockedCompanyCard";
import {collectUserCompanies} from "../@scripts/main/components/userPage/userPageScript";
import WalletCompanyPage from "../components/main/userPage/WalletCompanyPage";
import {UserContext, UserContextProps} from "../contexts/UserContext";

const UserPage: FC = () => {
    const contextUser = useContext(UserContext)
    const [formIsVisible, setFormIsVisible] = useState<boolean>(false);
    const [arrayCompany, setArrayCompany] = useState<CompanyType[]>([]);
    const [arrayIsUpdate, setArrayIsUpdate] = useState<boolean>(false);
    const [companyLimitIncrease, setCompanyLimitIncrease] = useState<number>(
        Number(localStorage.getItem("companyLimitIncrease")) || 0
    );
    const [previousWallet, setPreviousWallet] = useState<number>(0);

    const user: UserContextProps = useContext(UserContext);

    const baseLimitCompany = 1;
    const limitCompany = baseLimitCompany + companyLimitIncrease;

    useEffect(() => {
        if (!arrayIsUpdate) {
            collectUserCompanies(setArrayCompany, setArrayIsUpdate);
        }

        if (previousWallet < 1000000 && user.userInfo.wallet >= 1000000) {
            setCompanyLimitIncrease((prev) => {
                const newLimit = prev + 1;
                localStorage.setItem("companyLimitIncrease", String(newLimit)); // Stockage en localStorage
                return newLimit;
            });
        }
        setPreviousWallet(user.userInfo.wallet);
    }, [contextUser.userInfo]);


    return (
        <>
            <title>Mes entreprises</title>
            <section className={"office-background"}>
                <WalletCompanyPage walletValue={user.userInfo.wallet}/>

                {!formIsVisible ? (
                    <>
                        {arrayCompany.length >= limitCompany ? (
                            <LockedCompanyCard/>
                        ) : (
                            <CreateCompanyCard setFormIsVisible={setFormIsVisible}/>
                        )}

                        {arrayCompany.length > 0 &&
                            arrayCompany.map((company: CompanyType, index: number) => (
                                <CompanyCard
                                    key={index}
                                    companyId={company.id}
                                    companyName={company.name}
                                    pathImages={createCompanyData[sectorCompanyData.indexOf(company.sector)].src}
                                />
                            ))}
                    </>
                ) : (
                    <CreateCompanyForm setFormIsVisible={setFormIsVisible} setArrayCompanyIsUpdate={setArrayIsUpdate}/>
                )}
            </section>
        </>
    );
};

export default UserPage;
