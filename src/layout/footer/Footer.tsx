import {FC} from 'react';
import '../../@styles/main/components/global/Footer.css';

const Footer: FC<{}> = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 TheOfficeTheGame</p>
                <img src={"../../../../../public/images/LogoTheOffice.png"} alt="logo">
                <p>Tous droits réservés</p>
            </div>
        </footer>
    );
};

export default Footer;
