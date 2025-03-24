import {Dispatch, FC, SetStateAction} from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ExitButton from "../../../share/ExitButton";
import ProductionCard from "../cards/ProductionCard";
import EmployeesCard from "../cards/EmployeesCard";
import ToolsCard from "../cards/ToolsCard";
import SimulationButton from "../../../share/SimulationButton";
import "../../../../@styles/main/components/companyPage/gameDashboard.css"
import CardDashboard from "../dashboard/CardDashboard";
import CardSellValue from "../dashboard/CardSellValue";
import CardSellProduct from "../dashboard/CardSellProduct";
import CardTableProduct from "../dashboard/CardTableProduct";
import CardTableSalary from "../dashboard/CardTableSalary";
import SellIcon from '@mui/icons-material/Sell';

const GameDashboard: FC<{setPage:Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    return (
        <section className={"office-background-section"}>
            <div className={"dashboard-display"}>
                <ExitButton setPage={setPage}/>
                <div className={"icon-title"}>
                    <ImportantDevicesIcon className={"dashboard-icon"}/><h2>Dashboard</h2>
                </div>
                <div className={"card-dashboard-container"}>
                    <CardDashboard Icon={SellIcon} title={"Nom"} value={0}/>
                    <CardDashboard Icon={SellIcon} title={"Nom"} value={0}/>
                    <CardDashboard Icon={SellIcon} title={"Nom"} value={0}/>
                    <CardDashboard Icon={SellIcon} title={"Nom"} value={0}/>
                </div>
                <div className={"sell-value-container"}>
                    <CardSellValue/>
                    <CardSellProduct/>
                </div>

                <SimulationButton setPage={setPage}/>
            </div>
        </section>
    );
};

export default GameDashboard;

/*<div className={"sell-value-container"}>
                        <CardSellValue/>
                        <CardSellProduct/>
                    </div>
                    <div className={"product-value-container"}>
                        <CardTableProduct/>
                        <CardTableSalary/>
                    </div>*/
/*
<div className={"card-dashboard-container"}>
    <CardDashboard Icon={SellIcon} title={"Nom"} value={0}/>
    <CardDashboard Icon={SellIcon} title={"Nom"} value={0}/>
    <CardDashboard Icon={SellIcon} title={"Nom"} value={0}/>
    <CardDashboard Icon={SellIcon} title={"Nom"} value={0}/>
</div>
<div className={"sell-value-container"}>
    <CardSellValue/>
    <CardSellProduct/>
</div>


<div className={"metrics-cards-container"}>
    <div className={"product-value-container"}>
        <CardTableProduct/>
        <CardTableSalary/>
    </div>
</div>

 */