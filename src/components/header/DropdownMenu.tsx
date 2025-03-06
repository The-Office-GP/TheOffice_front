import {FC} from 'react';
import '../../@styles/a_header/dropdownMenu.css';
import {useAuth} from "../../contexts/AuthContext";
import {useNavigate} from "react-router";

const DropdownMenu: FC<{test:()=>void}> = ({test}) => {
    const {dispatch} = useAuth();
    const navigate = useNavigate()

    const handleDashbord = () => {
        console.log("Go to Dashboard")
    }

    const handleSettings = () => {
        console.log("Go to Settings")
    }

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
        navigate("/")
    }

    return (
        <div className="card" onMouseLeave={test}>
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
