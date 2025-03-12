import {FC} from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';


const GameDashboard: FC<{}> = ({}) => {
    return (
        <section className={"office-background-section"}>
            <div className={"menu-container"}>
                <ExitButton/>
                <div className={"dashboard-display"}>
                    <div className={"icon-title"}>
                        <ImportantDevicesIcon className={"dashboard-icon"}/><h3>Dashboard</h3>
                    </div>
                    <div className={"metrics-cards-container"}>
                        <ProductionCard/>
                        <EmployeesCard/>
                        <ToolsCard/>
                    </div>
                    <SimulationButton/>
                </div>
            </div>

        </section>
    );
};

export default GameDashboard;
