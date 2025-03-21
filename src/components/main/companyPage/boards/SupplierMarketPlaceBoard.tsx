import {Dispatch, FC, SetStateAction, useState} from 'react';
import SupplierMarketPlaceButtons from "../buttons/SupplierMarketPlaceButtons";
import "../../../../@styles/main/components/suppliers-component/SupplierMarketplaceBoard.css"

import StorefrontIcon from '@mui/icons-material/Storefront';
import ExitButton from "../../../share/ExitButton";
import PeopleIcon from "@mui/icons-material/People";
import {CompanyDetailsType} from "../../../../@types/companyType";
import ExpandPremisesButton from "../buttons/ExpandPremisesButton";

const SupplierMarketPlaceBoard: FC<{ setPage: Dispatch<SetStateAction<number>>, company: CompanyDetailsType}> = ({setPage, company}) => {
    const [stateBoard, setStateBoard] = useState<boolean>(false);

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
                    <p>Stock actuel des matières premières : {company.stockMaterials}</p>
                </div>
                <div className={"supplier-container"}>
                    <div className={"supplier-infos"}>
                        <p>Fourni'Tou</p>
                        <p>Matière première</p>
                        <p>2000€ les 100 pièces</p>
                    </div>
                    <button className={"recuite-button"} onClick={() => setStateBoard(true)}>Acheter</button>
                </div>
                <div className={"button-emplacement"}>
                    <ExpandPremisesButton/>
                </div>
            </div>
    );
};

export default SupplierMarketPlaceBoard;