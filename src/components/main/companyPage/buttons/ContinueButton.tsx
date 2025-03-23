import {FC} from 'react';
import "../../../../@styles/main/components/global/ContinueButton.css"

const ContinueButton: FC<{}> = ({}) => {
    return (
        <>
            <button className={"continue-button"}>Continuer</button>
        </>
    );
};

export default ContinueButton;