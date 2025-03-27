import {FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useContext} from 'react';
import "../../../../@styles/main/components/companyPage/simulation/SimulationTable.css"
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {nameOfProducts} from "../../../../@scripts/main/components/companyPage/ldisplayScript";



const SimulationTable: FC<{}> = ({}) => {
    const contextCompany = useContext(CompanyContext)
    const data: any = [
        {produit: nameOfProducts(contextCompany.company, "Product1"), bas: contextCompany.company.stockFinalMaterials[0].quantityLow + "unités", milieu: contextCompany.company.stockFinalMaterials[0].quantityMid + "unités", haut: contextCompany.company.stockFinalMaterials[0].quantityHigh + "unités"},
        {produit: nameOfProducts(contextCompany.company, "Product2"), bas: contextCompany.company.stockFinalMaterials[1].quantityLow + "unités", milieu: contextCompany.company.stockFinalMaterials[1].quantityMid + "unités", haut: contextCompany.company.stockFinalMaterials[1].quantityHigh + "unités"},
        {produit: nameOfProducts(contextCompany.company, "Product3"), bas: contextCompany.company.stockFinalMaterials[2].quantityLow + "unités", milieu: contextCompany.company.stockFinalMaterials[2].quantityMid + "unités", haut: contextCompany.company.stockFinalMaterials[2].quantityHigh + "unités"},
        {produit: nameOfProducts(contextCompany.company, "Product4"), bas: contextCompany.company.stockFinalMaterials[3].quantityLow + "unités", milieu: contextCompany.company.stockFinalMaterials[3].quantityMid + "unités", haut: contextCompany.company.stockFinalMaterials[3].quantityHigh + "unités"},
    ];
    return (
        <>
            <table className="border-collapse">
                <thead>
                <tr className="background-table-head">
                    <th className="table-header-label">Produit</th>
                    <th className="table-header-label">Bas de Gamme</th>
                    <th className="table-header-label">Milieu de Gamme</th>
                    <th className="table-header-label">Haut de Gamme</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row: { produit: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; bas: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; milieu: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; haut: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index:number) => (
                    <tr key={index} className="text-center">
                        <td className="cellule">{row.produit}</td>
                        <td className="cellule">{row.bas}</td>
                        <td className="cellule">{row.milieu}</td>
                        <td className="cellule">{row.haut}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};
export default SimulationTable;