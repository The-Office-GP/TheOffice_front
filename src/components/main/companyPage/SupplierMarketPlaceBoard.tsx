import {FC} from 'react';
import SupplierMarketPlaceButtons from "./buttons/SupplierMarketPlaceButtons";
import "../../../@styles/main/components/suppliers-component/SupplierMarketplaceBoard.css"

import StorefrontIcon from '@mui/icons-material/Storefront';

const SupplierMarketPlaceBoard: FC<{}> = ({}) => {
    return (

            <div className={"menu-container"}>
                <div className={"exit-buttons-container"}>
                    <h3>Qualité de la matière première</h3>
                    <SupplierMarketPlaceButtons/>
                </div>
                <div className={"display"}>
                    <div className={"icon-title"}>
                        <StorefrontIcon className={"icon"}/>
                        <h3>Fournisseur</h3>
                    </div>
                    <div className={"supplier-infos"}>
                        <p>Nom du fournisseur : supplierNameValue</p>
                        <p>Nom du produit : productName</p>
                        <p>Qualité du produit: qualityValue</p>
                        <p>Prix : productPrice</p>
                    </div>
                </div>
            </div>

    );
};

export default SupplierMarketPlaceBoard;