import {FC, useState} from 'react';
import "../../../../@styles/main/components/global/buttons/StartSimulationButton.css"


interface StartSimulationButtonProps {
    onStart: () => void;
}
const StartSimulationButton: FC<StartSimulationButtonProps> = ({onStart}) => {

    return (
        <>
            <button className={"start-simulation-button"} onClick={onStart} >Lancer simulation</button>
        </>
    );
};

export default StartSimulationButton;