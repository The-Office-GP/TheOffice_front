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
        <div className="card" onMouseLeave={buttonAction}>
            <h3>{username}</h3>
            <div className="separator"></div>

            <ul className="list">
                <li className="element" onClick={() => handleDashboard(navigate)}>
                    <p className="label">Mon Bureau</p>
                </li>
            </ul>
            <div className="separator"></div>
            <ul className="list">
                <li className="element" onClick={() => handleSettings(navigate)}>
                    <p className="label">Paramètres</p>
                </li>
            </ul>
            <div className="separator"></div>

            <ul className="list">
                <li className="element" onClick={() => handleLogout(navigate, dispatch, userContext)}>
                    <p className="label">Déconnexion</p>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
