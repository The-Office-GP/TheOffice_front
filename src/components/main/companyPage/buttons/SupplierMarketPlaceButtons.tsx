import {FC} from 'react';
import ExpandPremisesButton from "./ExpandPremisesButton";

import "../../../../@styles/main/components/suppliers-component/SupplierMarketPlaceButtons.css"
import {CompanyDetailsType} from "../../../../@types/companyType";

const SupplierMarketPlaceButtons: FC<{ company: CompanyDetailsType}> = ({company}) => {
    return (
        <div className={"buttons-container"}>
            <button className={"quality-button"}>Basse</button>
            <button className={"quality-button"}>Classique</button>
            <button className={"quality-button"}>Moyenne</button>
            <button className={"quality-button"}>Haut</button>
            <button className={"quality-button"}>Premium</button>
            <ExpandPremisesButton localLevel={company.local.level}/>
        </div>
    );
};

export default SupplierMarketPlaceButtons;