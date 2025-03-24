import {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import "../../../../@styles/main/components/suppliers-component/SupplierMarketplaceBoard.css"

import StorefrontIcon from '@mui/icons-material/Storefront';
import ExitButton from "../../../share/ExitButton";
import {CompanyDetailsType} from "../../../../@types/companyType";
import ExpandPremisesButton from "../buttons/ExpandPremisesButton";

const SupplierMarketPlaceBoard: FC<{ setPage: Dispatch<SetStateAction<number>>, company: CompanyDetailsType}> = ({setPage, company}) => {
    const [stateBoard, setStateBoard] = useState<boolean>(false);
    const [stockPrimaryMaterial, setStockPrimaryMaterial] = useState<number>()

    useEffect(() => {
        if (company.stockMaterials) {
            setStockPrimaryMaterial(company.stockMaterials.quantityMid);
        } else {
            setStockPrimaryMaterial(0); // Valeur par défaut pour éviter l'erreur
        }
    }, [company]);

    const addMaterial = () => {
        // Ajout du stock des matières premières

    }

    return (
            <div className={"menu-container"}>
                {/*<div className={"exit-buttons-container"}>*/}
                {/*    <h3>Qualité de la matière première</h3>*/}
                {/*    <SupplierMarketPlaceButtons/>*/}
                {/*</div>*/}
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
                    <button className={"recuite-button"} onClick={() => setStateBoard(true)}>Acheter</button>
                </div>
                <div className={"button-emplacement"}>
                    <ExpandPremisesButton localLevel={company.local.level}/>
                </div>
            </div>
    );
};

export default SupplierMarketPlaceBoard;