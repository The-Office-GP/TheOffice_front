import {FC} from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import '../../../@styles/b_main/components/globalUser/miniDashboard.css'

const WalletCompanyPage: FC<{ walletValue: Number }> = ({walletValue}) => {

    return (
        <div className={"mini-dashboard"}>
            <h3>Mon porte-feuille</h3>
            <div className={"mini-dashboard-info-money"}>
                <PaidIcon sx={{fontSize: '20px', marginRight: '4px'}}/>
                <span style={{fontSize: '20px'}}>{walletValue + "€"}</span>
            </div>
        </div>
    );
};

export default WalletCompanyPage;