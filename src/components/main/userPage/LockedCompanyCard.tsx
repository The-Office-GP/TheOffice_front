import {FC} from 'react';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import "../../../@styles/main/components/userPage/lockedCompanyCard.css"

const LockedCompanyCard: FC<{}> = ({}) => {
    return (
        <div className={"locked-company-card"}>
            <h3>Créer nouvelle entreprise</h3>
            <div>
                <EnhancedEncryptionIcon className={"lock-icon"}/>
            </div>
        </div>
    );
};

export default LockedCompanyCard;
