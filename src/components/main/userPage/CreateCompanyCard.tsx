import {Dispatch, FC, SetStateAction} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "../../../@styles/main/components/userPage/createCompanyCard.css"

const CreateCompanyCard: FC<{setFormIsVisible:Dispatch<SetStateAction<boolean>>}> = ({setFormIsVisible}) => {
    const handleCreateCompany = () => {
        setFormIsVisible(true)
    }

    return (
        <>
            <div className={"create-company-card"}>
                <h3>Créer une nouvelle entreprise</h3>
                <div>
                    <AddCircleOutlineIcon className={"add-button"} onClick={handleCreateCompany}/>
                </div>
                <h4>Coût : 10 000 000€</h4>
            </div>
        </>
    );
};

export default CreateCompanyCard;