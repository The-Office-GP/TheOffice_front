import {FC, useState} from 'react';
import '../../@styles/a_header/headerStyle.css';
import DropdownMenu from "../../components/header/DropdownMenu";
import {handleDropdownButton} from "../../@scripts/a_header/headerScript";

const Header: FC<{userIsLogged:boolean, username:string}> = ({userIsLogged, username}) => {
    const [dropdownMenuVisible, setDropdownMenuVisible] = useState<boolean>(false)

    return (
        <header>
            <div className={"header-title"}>
                <img src={"/LogoTheOffice.png"} alt={"Logo"}/>
                <h1>The Office</h1>
            </div>

            {userIsLogged &&
                <>
                    <button className={"button-dropdown-menu"} onClick={() => handleDropdownButton(dropdownMenuVisible, setDropdownMenuVisible)}>
                        {username.charAt(0)}
                    </button>
                    {dropdownMenuVisible && (<DropdownMenu buttonAction={() => handleDropdownButton(dropdownMenuVisible, setDropdownMenuVisible)} username={username}/>)}
                </>
            }
        </header>
    );
};

export default Header;
