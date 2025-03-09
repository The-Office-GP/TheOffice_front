import {FC, useContext} from 'react';
import '../../@styles/a_header/dropdownMenu.css';
import {useAuth} from "../../contexts/AuthContext";
import {useNavigate} from "react-router";
import {UserContext} from "../../contexts/UserContext";
import {User} from "../../_types/user";

const DropdownMenu: FC<{test:()=>void, username:string}> = ({test, username}) => {
    const {dispatch} = useAuth();
    const userContext = useContext(UserContext)
    const navigate = useNavigate()

    const handleDashbord = () => {
        console.log("Go to Dashboard")
    }

    const handleSettings = () => {
        console.log("Go to Settings")
    }

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
        userContext.setUserInfo({id:0, email:"", username:"", role:""} as User)
        navigate("/")
    }

    return (
        <div className="card" onMouseLeave={test}>
            <h3>{username}</h3>
            <div className="separator"></div>
            <ul className="list">
                <li className="element" onClick={handleDashbord}>
                    <p className="label">Tableau de bord</p>
                </li>
            </ul>
            <div className="separator"></div>
            <ul className="list">
                <li className="element" onClick={handleSettings}>
                    <p className="label">Paramètres</p>
                </li>
            </ul>
            <div className="separator"></div>
            <ul className="list">
                <li className="element" onClick={handleLogout}>
                    <p className="label">Deconnexion</p>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
