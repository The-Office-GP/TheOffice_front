import {FC, useEffect, useState} from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ConstructionIcon from '@mui/icons-material/Construction';
import "../../../@styles/main/components/globalUser/miniDashboard.css";
import {CompanyDetailsType} from "../../../@types/companyType";
import AddReactionIcon from '@mui/icons-material/AddReaction';

const MiniDashboard: FC<{company:CompanyDetailsType}> = ({company}) => {
    const [stockPrimaryMaterial, setStockPrimaryMaterial] = useState<number>()

    useEffect(() => {
        if (company.stockMaterial) {
            setStockPrimaryMaterial(company.stockMaterial.quantityMid);
        } else {
            setStockPrimaryMaterial(0); // Valeur par défaut pour éviter l'erreur
        }
    }, [company]);

    return (
        <div className={"mini-dashboard"}>
            <h3>{company.name}</h3>
            <div className={"mini-dashboard-info-money"}>
                <PaidIcon/>
                <p>{company.wallet}€</p>
            </div>
            <div className={"infos-display"}>
                <div className={"level-container2"}>
                    <div className={"mini-dashboard-info"}>
                        <AddReactionIcon/>
                        <span>{company.popularity}</span>
                    </div>
                    <div className={"mini-dashboard-info"}>
                        <ConstructionIcon/>
                        <span>{stockPrimaryMaterial}</span>
                    </div>
                    <div className={"mini-dashboard-info"}>
                        <PeopleOutlineIcon/>
                        <span>{company.employees.length}</span>
                    </div>
                    <div className="tooltip2">
                        <strong>Popularité : </strong> {company.popularity} <br/>
                        <strong>Nombre de matière première en stock : </strong> {stockPrimaryMaterial}<br/>
                        <strong>Nombre de salariés : </strong>{company.employees.length}<br/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MiniDashboard;
