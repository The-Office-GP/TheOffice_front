import {Dispatch, FC, SetStateAction, useState} from 'react';
import "../../../../@styles/main/components/global/buttons/StartSimulationButton.css"



const StartSimulationButton: FC<{ setPage: Dispatch<SetStateAction<number>>}> = ({setPage}) => {

    return (
        <>
            <button className={"start-simulation-button"} onClick={() => setPage(6)}>Lancer le cycle</button>
        </>
    )
}
export default StartSimulationButton;