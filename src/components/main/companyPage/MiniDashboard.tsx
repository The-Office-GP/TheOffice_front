import {FC} from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ConstructionIcon from '@mui/icons-material/Construction';
import "../../../@styles/b_main/components/globalUser/miniDashboard.css";

const MiniDashboard: FC<{}> = ({}) => {
    return (
        <div className={"mini-dashboard"}>
            <h3>CompanyName</h3>
            <div className={"mini-dashboard-info-money"}>
                <PaidIcon/>
                <p>100 000 000 €</p>
            </div>
            <div className={"infos-display"}>
                <div className={"mini-dashboard-info"}>
                    <PeopleOutlineIcon/>
                    <span className={"negative"}>- 2%</span>/<span className={"positive"}>+ 4%</span>
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
