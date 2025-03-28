
import {Dispatch, FC, SetStateAction} from 'react';
import "../../../../@styles/main/components/global/ContinueButton.css"

const ContinueButton: FC<{ setPage: Dispatch<SetStateAction<number>>}> = ({setPage}) => {

    return (
        <>
            <button className={"continue-button"} onClick={() => setPage(0)}>Continuer</button>
        </>
    );
};

export default ContinueButton;