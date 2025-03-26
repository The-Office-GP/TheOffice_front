import {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ExitButton from "../../../share/ExitButton";
import SimulationButton from "../../../share/SimulationButton";
import "../../../../@styles/main/components/companyPage/gameDashboard.css"
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {UserContext} from "../../../../contexts/UserContext";
import {IconButton} from "@mui/material";
import CardDashboardContainer from "../dashboard/CardDashboardContainer";
import ChartDashboardContainer from "../dashboard/ChartDashboardContainer";
import BoardDashboardContainer from "../dashboard/BoardDashboardContainer";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {collectCompanyInfos} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {useParams} from "react-router";

const GameDashboard: FC<{setPage:Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    const companyContext = useContext(CompanyContext)
    const userContext = useContext(UserContext)
    const [boardState, setBoardState] = useState<number>(0)
    const {id} = useParams()

    useEffect(() => {
        const path: string = "/companies/" + id;
        collectCompanyInfos(path, companyContext.setCompany)
    }, []);

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
                    <ImportantDevicesIcon className={"dashboard-icon"}/><h3>Tableau de Bord</h3>
                    <IconButton aria-label="delete"  onClick={handleChangeBoardStateRight}>
                        <ChevronRightIcon sx={{fontSize: "75px", color: 'white'}}/>
                    </IconButton>
                </div>
                <div className={"dashboar-header"}>
                </div>
                {boardState === 0 && <CardDashboardContainer company={companyContext.company}/>}
                {boardState === 1 && <ChartDashboardContainer company={companyContext.company}/>}
                {boardState === 2 && <BoardDashboardContainer company={companyContext.company}/>}
                <SimulationButton setPage={setPage}/>
            </div>
        </section>
    );
};

export default GameDashboard;