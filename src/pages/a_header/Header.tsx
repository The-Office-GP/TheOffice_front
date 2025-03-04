import {FC} from 'react';
import '../../@styles/a_header/headerStyle.css';

const Header: FC<{}> = ({}) => {
    return (
        <header>
            <img src={"/LogoTheOffice.png"}/>
            <h1>The Office</h1>
        </header>
    );
};

export default Header;
