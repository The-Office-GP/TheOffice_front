import {FC} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import "../../../@styles/b_main/components/createCompanyPage/CreateCompanyCard.css"
const CreateCompanyCard: FC<{}> = ({}) => {
    return (
        <>
            <div className={"create-company-card"}>
                <h3>Créer une entreprise</h3>
                <div>
                    <AddCircleOutlineIcon className={"add-button"}/>
                </div>
            </div>
        </>
    );
};

export default CreateCompanyCard;