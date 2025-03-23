
import {FC} from 'react';
import "../../../../@styles/main/components/global/ContinueButton.css"

const ContinueButton: FC<{}> = ({}) => {

    return (
        <>
            <button className={"continue-button"} onClick={() => setPage(0)}>Continuer</button>
        </>
    );
};

export default ContinueButton;