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

const SupplierMarketPlaceBoard: FC<{ setPage: Dispatch<SetStateAction<number>>, company: CompanyDetailsType }> = ({setPage, company}) => {
    const [stateBoard, setStateBoard] = useState<boolean>(false);
    const [stockPrimaryMaterial, setStockPrimaryMaterial] = useState<number>(company.stockMaterials?.quantityMid || 0);
    const [buyMaterials, setBuyMaterials] = useState<StockMaterialsType>(company.stockMaterials || {quantityMid: 0} );
    const params = useParams();
    const contextCompany = useContext(CompanyContext);

    useEffect(() => {
        setStockPrimaryMaterial(buyMaterials.quantityMid);
    }, [buyMaterials]);

    const buyPrimaryMaterial = () => {
        if (company.wallet >= 2000) {
            setBuyMaterials(prev => ({
                ...prev,
                quantityMid: prev.quantityMid + 100
            }));
        } else {
            alert("Vous n'avez pas assez d'argent pour acheter de nouvelles matières premières");
        }
        // Met à jour le contexte avec les nouvelles valeurs
        contextCompany.setCompany(contextCompany.company);

        const id = Number(params.id);
        saveCompanyInfo(id, contextCompany.company, contextCompany.setCompany)
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
                <p>Stock actuel des matières premières : {stockPrimaryMaterial}</p>
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
