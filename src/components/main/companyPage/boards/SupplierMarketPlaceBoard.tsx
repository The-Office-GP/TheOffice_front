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
import {nameOfMaterial, supplierInformation} from "../../../../@scripts/main/components/companyPage/ldisplayScript";
import SupplierCard from "../SupplierCard";

const SupplierMarketPlaceBoard: FC<{ setPage: Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    const {id} = useParams()
    const contextCompany = useContext(CompanyContext)

    const save = () =>{
       saveCompanyInfo(Number(id), contextCompany.company, contextCompany.setCompany)

        setPage(0)
    }

    return (
        <div className={"supplier-menu"}>
            <ExitButton setPage={setPage}/>
            <div>
                <div className={"icon-title"}>
                    <StorefrontIcon className={"menu-Icon"}/>
                    <h3>Mon fournisseur</h3>
                </div>
            </div>
            <div className={"stock-container"}>
                <p>Stock total de {nameOfMaterial(contextCompany.company)} : {contextCompany.company.stockMaterial.quantityHigh+ contextCompany.company.stockMaterial.quantityMid+ contextCompany.company.stockMaterial.quantityLow}</p>
                <p className={"stat-stock"}>Stock de {nameOfMaterial(contextCompany.company)} faible qualité : {contextCompany.company.stockMaterial.quantityLow}</p>
                <p className={"stat-stock"}>Stock de {nameOfMaterial(contextCompany.company)} bonne qualité : {contextCompany.company.stockMaterial.quantityMid}</p>
                <p className={"stat-stock"}>Stock de {nameOfMaterial(contextCompany.company)} excellente qualité : {contextCompany.company.stockMaterial.quantityHigh}</p>
            </div>
            <div className={"supplier-container"}>
                {supplierInformation(contextCompany.company)?.map((supplier, index)=> (
                    <SupplierCard supplier={supplier} index={index}/>
                ))}
            </div>
            <div className={"button-emplacement"}>
                <button className={"recuite-button"} onClick={save}>Sauvegarder</button>
                <ExpandPremisesButton localLevel={contextCompany.company.local.level}/>
            </div>
        </div>
    );
};

export default SupplierMarketPlaceBoard;
