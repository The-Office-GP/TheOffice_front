import {Dispatch, FC, SetStateAction} from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ExitButton from "../../../share/ExitButton";
import ProductionCard from "../cards/ProductionCard";
import EmployeesCard from "../cards/EmployeesCard";
import ToolsCard from "../cards/ToolsCard";
import SimulationButton from "../../../share/SimulationButton";
import "../../../../@styles/main/components/companyPage/gameDashboard.css"


const GameDashboard: FC<{setPage:Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    return (
        <section className={"office-background-section"}>
            <div className={"dashboard-display"}>
                <ExitButton setPage={setPage}/>
                <div className={"icon-title"}>
                    <ImportantDevicesIcon className={"dashboard-icon"}/><h3>Dashboard</h3>
                </div>
                <div className={"metrics-cards-container"}>
                    <ProductionCard/>
                    <EmployeesCard/>
                    <ToolsCard/>
                </div>
                <SimulationButton setPage={setPage}/>
            </div>
        </section>
    );
};

export default GameDashboard;