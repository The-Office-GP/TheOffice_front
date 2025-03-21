import {Dispatch, FC, SetStateAction} from 'react';
import "../../@styles/main/components/global/simulationButton.css"

<<<<<<< HEAD
interface SimulationButtonProps {
    setPage: (page: number) => void;
}
const SimulationButton: FC<SimulationButtonProps> = ({setPage}) => {
=======

const SimulationButton: FC<{ setPage: Dispatch<SetStateAction<number>> }> = ({}) => {
>>>>>>> 80e54365cdb3d061dd82214f4ece3815667ffe9f

    return (
        <button className={"simulation-button"} onClick={() => setPage(4)}>Simulation</button>
    );
};

export default SimulationButton;