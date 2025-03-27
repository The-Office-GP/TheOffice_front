import {FC, useContext} from 'react';
import {Supplier} from "../../../@types/supplierType";
import {CompanyContext} from "../../../contexts/CompanyContext";
import "../../../@styles/main/components/companyPage/supplierCard.css"
import companyPage from "../../../pages/CompanyPage";

const SupplierCard: FC<{supplier:Supplier, index:number}> = ({supplier, index}) => {
    const contextCompany = useContext(CompanyContext)

    const buyPrimaryMaterial = () => {
            switch (index){
                case 0:
                    if (contextCompany.company.wallet >= 100) {
                        contextCompany.setCompany(prevState => ({
                            ...prevState,
                            wallet: prevState.wallet - 100,
                        }))
                        contextCompany.setCompany(prevState => ({
                            ...prevState,
                            stockMaterial: {
                                ...prevState.stockMaterial,  // Garde les autres propriétés de stockMaterial
                                quantityLow: prevState.stockMaterial.quantityLow + 100,    // Mise à jour de quantityLow
                            }
                        }));
                    };
                    break
                case 1:
                    if (contextCompany.company.wallet >= 500) {
                        contextCompany.setCompany(prevState => ({
                            ...prevState,
                            wallet: prevState.wallet - 500,
                        }))
                        contextCompany.setCompany(prevState => ({
                            ...prevState,
                            stockMaterial: {
                                ...prevState.stockMaterial,  // Garde les autres propriétés de stockMaterial
                                quantityMid: prevState.stockMaterial.quantityMid + 100,    // Mise à jour de quantityLow
                            }
                        }));
                    };
                    break
                case 2:
                    if (contextCompany.company.wallet >= 1000) {
                        contextCompany.setCompany(prevState => ({
                            ...prevState,
                            wallet: prevState.wallet - 1000,
                        }))
                        contextCompany.setCompany(prevState => ({
                            ...prevState,
                            stockMaterial: {
                                ...prevState.stockMaterial,  // Garde les autres propriétés de stockMaterial
                                quantityHigh: prevState.stockMaterial.quantityHigh + 100,    // Mise à jour de quantityLow
                            }
                        }));
                    };
                    break
            }
            console.log(contextCompany.company)
        }

    return (
        <div className="supplier-card">
            <div className="inner">
			<span className="pricing">
				<span>
					{supplier.priceIndicator} <small>/ 100pcs</small>
				</span>
			</span>
                <p className="title">{supplier.name}</p>
                <p className="info">{supplier.description}</p>
                <ol className="features">
                    <li>
                        <span>{supplier.bonus1}</span>
                    </li>
                    <li>
                        <span>{supplier.bonus2}</span>
                    </li>
                </ol>
                <button className={"action"} onClick={buyPrimaryMaterial}>Acheter</button>
            </div>
        </div>
    );
};

export default SupplierCard;
