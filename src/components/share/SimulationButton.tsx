import {Dispatch, FC, SetStateAction} from 'react';
import "../../@styles/main/components/global/simulationButton.css"
import {putTheOfficeDbUser} from "../../api/theofficeApi";



const SimulationButton: FC<{ setPage: Dispatch<SetStateAction<number>> }> = ({setPage}) => {
    return (
        <button className={"simulation-button"} onClick={() => setPage(4)}>Simulation</button>
    );
};

export default SimulationButton;