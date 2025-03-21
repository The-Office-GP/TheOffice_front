import {Dispatch, FC, SetStateAction} from 'react';
import "../../../../@styles/main/components/companyPage/simulation/ContinueButton.css"

interface ContinueButtonProps {
    setPage: (page: number) => void;
}
const ContinueButton: FC<{ setPage: Dispatch<SetStateAction<number>> }> = ({setPage}) => {
    return (
        <>
            <button className={"continue-button"} onClick={() => setPage(0)}>Continuer</button>
        </>
    );
};

export default ContinueButton;