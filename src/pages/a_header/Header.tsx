import {FC, useState} from 'react';
import '../../@styles/a_header/headerStyle.css';
import DropdownMenu from "../../components/header/DropdownMenu";

const Header: FC<{userIsLogged:boolean, username:string}> = ({userIsLogged, username}) => {
    const [dropdownMenuVisible, setDropdownMenuVisible] = useState<boolean>(false)

    const handleDropdownButton = () => {
        setDropdownMenuVisible(!dropdownMenuVisible)
    }

    return (
        <header>
            {userIsLogged ? (
                <>
                    <div className={"header-title"}>
                        <img src={"/LogoTheOffice.png"}/>
                        <h1>The Office</h1>
                    </div>
                    <button className={"button-dropdown-menu"} onClick={handleDropdownButton}>
                        {username.charAt(0)}
                    </button>
                    {dropdownMenuVisible && (<DropdownMenu test={handleDropdownButton} username={username}/>)}
                </>
            ):(
                <div className={"header-title"}>
                    <img src={"/LogoTheOffice.png"}/>
                    <h1>The Office</h1>
                </div>
                )}

        </header>
    );
};

export default Header;
