import {Dispatch, FC, SetStateAction, use, useContext, useEffect, useState} from 'react';
import "../../../../@styles/main/components/suppliers-component/SupplierMarketplaceBoard.css"

import StorefrontIcon from '@mui/icons-material/Storefront';
import ExitButton from "../../../share/ExitButton";
import {CompanyDetailsType} from "../../../../@types/companyType";
import ExpandPremisesButton from "../buttons/ExpandPremisesButton";
import {useParams} from "react-router";
import {collectCompanyInfos, saveCompanyInfo} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {companyDetailsDefault} from "../../../../@data/companyValueDefault";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {nameOfMaterial} from "../../../../@scripts/main/components/companyPage/ldisplayScript";

const SupplierMarketPlaceBoard: FC<{ setPage: Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    const {id} = useParams()
    const [company, setCompany] = useState<CompanyDetailsType>(companyDetailsDefault)
    const contextCompany = useContext(CompanyContext)

    useEffect(() => {
        const path: string = "/companies/" + id
        collectCompanyInfos(path, setCompany)
    }, []);

    const buyPrimaryMaterial = () => {
        if (company.wallet >= 5000) {
            setCompany(prevState => ({
                ...prevState,
                wallet: prevState.wallet - 5000,  // On soustrait 5000 du wallet
            }));
            setCompany(prevState => ({
                ...prevState,
                stockMaterial: {
                    ...prevState.stockMaterial,  // Garde les autres propriétés de stockMaterial
                    quantityHigh: prevState.stockMaterial.quantityHigh + 750,  // Mise à jour de quantityHigh
                    quantityMid: prevState.stockMaterial.quantityMid + 750,    // Mise à jour de quantityMid
                    quantityLow: prevState.stockMaterial.quantityLow + 750,    // Mise à jour de quantityLow
                }
            }));
        } else {
            console.log('Solde insuffisant');
        }
    }

    const save = () =>{
       saveCompanyInfo(Number(id), company,contextCompany.setCompany)
        setPage(0)
    }


    return (
        <div className={"menu-container"}>
            <ExitButton setPage={setPage}/>
            <div>
                <div className={"icon-title"}>
                    <StorefrontIcon className={"menu-Icon"}/>
                    <h3>Mon fournisseur</h3>
                </div>
            </div>
            <div className={"stock-container"}>
                <p>Stock actuel de {nameOfMaterial(company)} : {company.stockMaterial.quantityHigh+ company.stockMaterial.quantityMid+ company.stockMaterial.quantityLow}</p>
            </div>
            <div className={"supplier-container"}>
                <div className={"supplier-infos"}>
                    <h4><u>Fourni'Tou</u></h4>
                    <p>Matière première</p>
                    <p>5000€ les 2250 pièces</p>
                </div>
                <button className={"recuite-button"} onClick={buyPrimaryMaterial}>Acheter</button>
                <button className={"recuite-button"} onClick={save}>Sauvegarder</button>
            </div>
            <div className={"button-emplacement"}>
                <ExpandPremisesButton localLevel={company.local.level}/>
            </div>
        </div>
    );
};

export default SupplierMarketPlaceBoard;
