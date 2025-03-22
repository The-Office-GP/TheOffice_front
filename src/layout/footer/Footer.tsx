import {FC} from 'react';
import '../../@styles/main/components/global/Footer.css';

const Footer: FC<{}> = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 TheOfficeTheGame</p>
                <div className={"footer-title"}>
                    <img src={"/LogoTheOffice.png"} alt={"logo"}/>
                    <p><strong>TheOffice</strong></p>
                </div>

                <p>Tous droits réservés</p>
            </div>
        </footer>
    );
};

export default Footer;
