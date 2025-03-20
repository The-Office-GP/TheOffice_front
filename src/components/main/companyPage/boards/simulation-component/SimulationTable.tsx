import {FC} from 'react';
import "../../../../../@styles/main/components/global/tables/SimulationTable.css"

const SimulationTable: FC<{}> = ({}) => {
    const data = [
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
                {data.map((row, index) => (
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