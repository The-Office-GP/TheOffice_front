import {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ExitButton from "../../../share/ExitButton";
import SimulationButton from "../../../share/SimulationButton";
import "../../../../@styles/main/components/companyPage/gameDashboard.css"
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {UserContext} from "../../../../contexts/UserContext";
import CardDashboardContainer from "../dashboard/CardDashboardContainer";
import {IconButton} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChartDashboardContainer from "../dashboard/ChartDashboardContainer";
import BoardDashboardContainer from "../dashboard/BoardDashboardContainer";

const GameDashboard: FC<{setPage:Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    const companyContext = useContext(CompanyContext)
    const userContext = useContext(UserContext)
    const [boardState, setBoardState] = useState<number>(0)

    const handleChangeBoardStateLeft = () => {
        setBoardState((prevState) => (prevState === 0 ? 2 : prevState - 1));
    }

    const handleChangeBoardStateRight = () => {
        setBoardState((prevState) => (prevState === 2 ? 0 : prevState + 1));
    }


    return (
        <section className={"office-background-section"}>
            <div className={"dashboard-display"}>
                <ExitButton setPage={setPage}/>
                <div className={"icon-title"}>
                    <IconButton aria-label="delete" onClick={handleChangeBoardStateLeft}>
                        <ChevronLeftIcon sx={{fontSize: "75px", color:'white'}}/>
                    </IconButton>
                    <ImportantDevicesIcon className={"dashboard-icon"}/><h3>Dashboard</h3>
                    <IconButton aria-label="delete"  onClick={handleChangeBoardStateRight}>
                        <ChevronRightIcon sx={{fontSize: "75px", color: 'white'}}/>
                    </IconButton>
                </div>
                <div className={"dashboar-header"}>
                </div>
                {boardState === 0 && <CardDashboardContainer statistics={companyContext.company.statistics}/>}
                {boardState === 1 && <ChartDashboardContainer company={companyContext.company}/>}
                {boardState === 2 && <BoardDashboardContainer company={companyContext.company}/>}
                <SimulationButton setPage={setPage}/>
            </div>
        </section>
    );
};

export default GameDashboard;

/*
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

<div className={"sell-value-container"}>
                    <CardSellValue/>
                    <CardSellProduct/>
                </div>

 */