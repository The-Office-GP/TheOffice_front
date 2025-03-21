import {Dispatch, FC, SetStateAction} from 'react';
import "../../@styles/main/components/global/simulationButton.css"


const SimulationButton: FC<{ setPage: Dispatch<SetStateAction<number>> }> = ({}) => {

    return (
        <button className={"simulation-button"}>Simulation</button>
    );
};

export default SimulationButton;