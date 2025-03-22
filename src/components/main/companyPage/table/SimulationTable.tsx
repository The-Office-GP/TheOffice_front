import {FC, JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from 'react';
import "../../../../@styles/main/components/simulation/"


const SimulationTable: FC<{}> = ({}) => {
    const data: any = [
        {produit: "Palette", bas: "0 unités", milieu: "0 unités", haut: "0 unités"},
        {produit: "Chaise", bas: "0 unités", milieu: "0 unités", haut: "0 unités"},
        {produit: "Table", bas: "0 unités", milieu: "0 unités", haut: "0 unités"},
        {produit: "Cabane", bas: "0 unités", milieu: "0 unités", haut: "0 unités"},
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
                        Snapshot_2025-03-22_14-03-48.png          <td className="cellule">{row.produit}</td>
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