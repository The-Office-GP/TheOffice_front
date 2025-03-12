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
                    <p className={"negative"}>- 2%</p> / <p className={"positive"}>+ 4%</p>
                </div>
                <div className={"mini-dashboard-info"}>
                    <StackedLineChartIcon/>
                    <p className={"negative"}>- 2%</p>/<p className={"positive"}>+ 5%</p>
                </div>
                <div className={"mini-dashboard-info"}>
                    <ConstructionIcon/>
                    <p className={"negative"}>- 2%</p>/<p className={"positive"}>+ 5%</p>
                </div>

            </div>

        </div>
    );
};

export default MiniDashboard;
