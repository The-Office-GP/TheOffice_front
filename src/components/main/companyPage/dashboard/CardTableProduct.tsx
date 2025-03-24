import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/gameDashboard.css"
import {CompanyDetailsType} from "../../../../@types/companyType";
import "../../../../@styles/main/components/companyPage/dashboard/DashboardTable.css"


const CardTableProduct: FC<{company:CompanyDetailsType}> = ({company}) => {
    return (
        <div className="card-dashboard shadow">
            <div className="card-header border-0">
                <div className="row align-items-center">
                    <div className="col">
                        <h3 className="mb-0">Stocks</h3>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Produits</th>
                        <th scope="col">Haut de gamme</th>
                        <th scope="col">Milieu de gamme</th>
                        <th scope="col">Bas de gamme</th>
                    </tr>
                    </thead>
                    <tbody>
                    {company.stockFinalMaterials.map((product) => (
                        <tr>
                            <th scope="row">
                                {product.name}
                            </th>
                            <td>
                                {product.quantityHigh}
                            </td>
                            <td>
                                {product.quantityMid}
                            </td>
                            <td>
                                {product.quantityLow}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CardTableProduct;