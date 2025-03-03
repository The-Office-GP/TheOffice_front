import {FC} from 'react';
import '../../@styles/a_header/headerStyle.css';

const Header: FC<{}> = ({}) => {
    return (
        <header>
            <img src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67bc720314b5fc34a296d213/download/Logo.png"}/>
            <h1>The Office</h1>
        </header>
    );
};

export default Header;
