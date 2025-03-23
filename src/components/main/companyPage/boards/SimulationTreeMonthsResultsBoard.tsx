import {Dispatch, FC, SetStateAction} from 'react';
import SimulationTable from "../table/SimulationTable";
import ContinueButton from "../buttons/ContinueButton";
import "../../../../@styles/main/components/companyPage/simulation/SimulationBoard.css"
import "../../../../@styles/main/components/companyPage/simulation/SimulationTreeMonthsResultsBoard.css"

const SimulationTreeMonthsResultsBoard: FC<{ setPage: Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    return (
        <>
            <div className={"simulation-container"}
                 style={{backgroundImage: "url('/assets/simulation-background/Simulation-background.png')"}}>
                <h2>Bilan trimestriel</h2>
                <div className={"simulation-results-container"}>
                    <p>Chiffre d'affaire: CAValue €</p>
                    <p>Total des charge: chargesValue</p>
                    <p>Total des production: productionValue</p>
                    <p>Cotte de popularité: popularityValue</p>
                    <SimulationTable/>
                </div>
                <ContinueButton setPage={setPage}/>
            </div>
        </>
    );
};

export default SimulationTreeMonthsResultsBoard;