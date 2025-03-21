import {Dispatch, FC, SetStateAction} from 'react';
import "../../@styles/main/components/global/simulationButton.css"

interface SimulationButtonProps {
    setPage: (page: number) => void;
}
const SimulationButton: FC<SimulationButtonProps> = ({setPage}) => {

    return (
        <button className={"simulation-button"} onClick={() => setPage(4)}>Simulation</button>
    );
};

export default SimulationButton;