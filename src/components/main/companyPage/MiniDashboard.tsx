import {FC, useContext, useEffect, useState} from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ConstructionIcon from '@mui/icons-material/Construction';
import "../../../@styles/main/components/globalUser/miniDashboard.css";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import {UserContext} from "../../../contexts/UserContext";
import {CompanyContext} from "../../../contexts/CompanyContext";

const MiniDashboard: FC<{}> = ({}) => {
    const [stockPrimaryMaterial, setStockPrimaryMaterial] = useState<number>()
    const contextCompany = useContext(CompanyContext)

    useEffect(() => {
        if (contextCompany.company.stockMaterial) {
            setStockPrimaryMaterial(contextCompany.company.stockMaterial.quantityMid);
        } else {
            setStockPrimaryMaterial(0); // Valeur par défaut pour éviter l'erreur
        }
    }, [contextCompany.company]);

    return (
        <div className={"mini-dashboard"}>
            <h3>{contextCompany.company.name}</h3>
            <div className={"mini-dashboard-info-money"}>
                <PaidIcon/>
                <p>{contextCompany.company.wallet}€</p>
            </div>
            <div className={"infos-display"}>
                <div className={"level-container2"}>
                    <div className={"mini-dashboard-info"}>
                        <AddReactionIcon/>
                        <span>{contextCompany.company.popularity}</span>
                    </div>
                    <div className={"mini-dashboard-info"}>
                        <ConstructionIcon/>
                        <span>{contextCompany.company.stockMaterial.quantityLow + contextCompany.company.stockMaterial.quantityMid + contextCompany.company.stockMaterial.quantityHigh}</span>
                    </div>
                    <div className={"mini-dashboard-info"}>
                        <PeopleOutlineIcon/>
                        <span>{contextCompany.company.employees.length}</span>
                    </div>
                    <div className="tooltip2">
                        <strong>Popularité : </strong> {contextCompany.company.popularity} <br/>
                        <strong>Nombre de matière première en stock : </strong> {stockPrimaryMaterial}<br/>
                        <strong>Nombre de salariés : </strong>{contextCompany.company.employees.length}<br/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MiniDashboard;
