import {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import "../../../../@styles/main/components/suppliers-component/SupplierMarketplaceBoard.css"

import StorefrontIcon from '@mui/icons-material/Storefront';
import ExitButton from "../../../share/ExitButton";
import {CompanyDetailsType} from "../../../../@types/companyType";
import ExpandPremisesButton from "../buttons/ExpandPremisesButton";
import {StockMaterialsType} from "../../../../@types/stockMaterialsType";
import {useParams} from "react-router";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {saveCompanyInfo} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {UserContext} from "../../../../contexts/UserContext";

const SupplierMarketPlaceBoard: FC<{ setPage: Dispatch<SetStateAction<number>>, company: CompanyDetailsType }> = ({setPage, company}) => {
    const [stateBoard, setStateBoard] = useState<boolean>(false);
    const [stockPrimaryMaterial, setStockPrimaryMaterial] = useState<number>(company.stockMaterial?.quantityMid || 0);
    const [buyMaterials, setBuyMaterials] = useState<StockMaterialsType>(company.stockMaterial || {quantityMid: 0} );
    const params = useParams();
    const contextCompany = useContext(CompanyContext);
    const contextUser = useContext(UserContext);



    const buyPrimaryMaterial = () => {
        // Vérifie si l'utilisateur a assez d'argent
        if (contextUser.userInfo.wallet >= 2000) {
            // Récupérer la valeur précédente du stock de matériaux
            const prevValue = contextCompany.company.stockMaterial.quantityMid;

            // Mettre à jour le stock de matériaux dans le contexte de l'entreprise
            contextCompany.setCompany(prevCompany => ({
                ...prevCompany,
                stockMaterial: {
                    ...prevCompany.stockMaterial,
                    quantityMid: prevValue + 100,  // Ajouter 100 unités au stock
                }
            }));

            // Réduire le solde de l'utilisateur de 2000 (coût d'achat des matières premières)
            contextUser.setUserInfo(prevUserInfo => ({
                ...prevUserInfo,
                wallet: prevUserInfo.wallet - 2000, // Réduction du portefeuille de l'utilisateur
            }));

        } else {
            // Si l'utilisateur n'a pas assez d'argent
            alert("Vous n'avez pas assez d'argent pour acheter de nouvelles matières premières");
        }

        const id = Number(params.id);
        saveCompanyInfo(id, contextCompany.company, contextCompany.setCompany);
    };


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
                <p>Stock actuel des matières premières : {contextCompany.company.stockMaterial.quantityMid}</p>
            </div>
            <div className={"supplier-container"}>
                <div className={"supplier-infos"}>
                    <h4><u>Fourni'Tou</u></h4>
                    <p>Matière première</p>
                    <p>2000€ les 100 pièces</p>
                </div>
                <button className={"recuite-button"} onClick={buyPrimaryMaterial}>Acheter</button>
            </div>
            <div className={"button-emplacement"}>
                <ExpandPremisesButton localLevel={company.local.level}/>
            </div>
        </div>
    );
};

export default SupplierMarketPlaceBoard;
