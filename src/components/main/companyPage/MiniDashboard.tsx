import {FC, useContext, useEffect, useState} from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ConstructionIcon from '@mui/icons-material/Construction';
import "../../../@styles/main/components/globalUser/miniDashboard.css";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import {UserContext} from "../../../contexts/UserContext";
import {CompanyContext} from "../../../contexts/CompanyContext";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const MiniDashboard: FC<{}> = ({}) => {
    const contextCompany = useContext(CompanyContext)

    return (
        <div className={"mini-dashboard"}>
            <h3>{contextCompany.company.name}</h3>
            <div className={"mini-dashboard-info-money"}>
                <PaidIcon/>
                <p>{contextCompany.company.wallet.toFixed(2)}€</p>
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
                    <div className={"mini-dashboard-info"}>
                        <PrecisionManufacturingIcon/>
                        <span>{contextCompany.company.machinesInCompany.length}</span>
                    </div>
                    <div className="tooltip2">
                        <strong>Popularité : </strong> {contextCompany.company.popularity} <br/>
                        <strong>Nombre de matière première en stock : </strong> {contextCompany.company.stockMaterial.quantityLow + contextCompany.company.stockMaterial.quantityMid + contextCompany.company.stockMaterial.quantityHigh}<br/>
                        <strong>Nombre de salariés : </strong>{contextCompany.company.employees.length}<br/>
                        <strong>Nombre de machines : </strong>{contextCompany.company.machinesInCompany.length}<br/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MiniDashboard;
