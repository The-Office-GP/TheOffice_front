import {Dispatch, FC, SetStateAction, useContext, useEffect} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeCardButtons from "./EmployeeCardButtons";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem.css";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {useParams} from "react-router";

interface EmployeeItemProps {
    employee: EmployeeType;
    type: string;
    listParent: EmployeeType[];
    setListParent: Dispatch<SetStateAction<EmployeeType[]>>;
    onRecruit: () => void;
}

const EmployeeItem: FC<EmployeeItemProps> = ({employee, type, listParent, setListParent, onRecruit}) => {
    // Fonction de recrutement
    const addEmployee = () => {
        onRecruit(); // Appel de la fonction de recrutement passée en prop
    };

    return (
        <div className="obtain-item-card">
            <img src={employee.image} alt="employee picture"/>
            <div className={"info-container"}>
                <span>{employee.name}</span>
                <span className="job"> {employee.job}</span>
                <span className={"info"}>Niveau : {employee.level - 4}</span>
                <span className={"info"}>Salaire : {employee.salary}€</span>
            </div>

            {type === "companyTeam" ? (
                <EmployeeCardButtons/>
            ) : (
                <button className={"increase-button"} onClick={addEmployee}>
                    Recrutement
                </button>
            )}
        </div>
    );
};

export default EmployeeItem;
