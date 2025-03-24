import {FC, useContext} from 'react';
import '../../@styles/header/dropdownMenu.css';
import {useAuth} from "../../contexts/AuthContext";
import {useNavigate} from "react-router";
import {UserContext} from "../../contexts/UserContext";
import {handleDashboard, handleLogout, handleSettings} from "../../@scripts/header/dropdownScript";

const DropdownMenu: FC<{buttonAction:()=>void, username:string}> = ({buttonAction, username}) => {
    const {dispatch} = useAuth();
    const userContext = useContext(UserContext)
    const navigate = useNavigate()

    return (
        <div className="dropdown-menu-user" onMouseLeave={buttonAction}>
            <h3>{username}</h3>
            <div className="separator"></div>

            <ul className="dropdown-menu-list">
                <li className="dropdown-menu-element" onClick={() => handleDashboard(navigate)}>
                    <p className="dropdown-menu-label">Mes entreprises</p>
                </li>
            </ul>
            <div className="separator"></div>
            <ul className="dropdown-menu-list">
                <li className="dropdown-menu-element" onClick={() => handleSettings(navigate)}>
                    <p className="dropdown-menu-label">Paramètres</p>
                </li>
            </ul>
            <div className="separator"></div>

            <ul className="dropdown-menu-list">
                <li className="dropdown-menu-element" onClick={() => handleLogout(navigate, dispatch, userContext)}>
                    <p className="dropdown-menu-label">Déconnexion</p>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
