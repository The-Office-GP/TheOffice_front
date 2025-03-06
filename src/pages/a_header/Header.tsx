import {FC} from 'react';
import '../../@styles/a_header/headerStyle.css';

const Header: FC<{userIsLogged:boolean, username:string}> = ({userIsLogged, username}) => {
    return (
        <header>
            {userIsLogged ? (
                <>
                    <div className={"header-title"}>
                        <img src={"/LogoTheOffice.png"}/>
                        <h1>The Office</h1>
                    </div>
                    <button>
                        ${username.charAt(0)}
                    </button>
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
