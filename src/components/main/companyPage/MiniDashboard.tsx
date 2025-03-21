import {FC} from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ConstructionIcon from '@mui/icons-material/Construction';
import "../../../@styles/main/components/globalUser/miniDashboard.css";
import {CompanyDetailsType} from "../../../@types/companyType";

const MiniDashboard: FC<{company:CompanyDetailsType}> = ({company}) => {
    return (
        <div className={"mini-dashboard"}>
            <h3>{company.name}</h3>
            <div className={"mini-dashboard-info-money"}>
                <PaidIcon/>
                <p>{company.wallet}€</p>
            </div>
            <div className={"infos-display"}>
                <div className={"mini-dashboard-info"}>
                    <PeopleOutlineIcon/>
                    <span>{company.popularity}</span>
                </div>
                <div className={"mini-dashboard-info"}>
                    <StackedLineChartIcon/>
                    <span className={"negative"}>- 2%</span>/<span className={"positive"}>+ 5%</span>
                </div>
                <div className={"mini-dashboard-info"}>
                    <ConstructionIcon/>
                    <span className={"negative"}>- 2%</span>/<span className={"positive"}>+ 5%</span>
                </div>

            </div>

        </div>
    );
};

export default MiniDashboard;
