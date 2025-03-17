import {FC} from 'react';
import {EmployeeType} from "../../../../_types/employeeType";
import EmployeeCardButtons from "./EmployeeCardButtons";

const EmployeeItem: FC<{employee:EmployeeType}> = ({employee}) => {
    return (
        <div className="employee-card">
            <h3>{employee.name}</h3>
            {/* Vérification si posterPath existe */}
            {employee.posterPath ? (
                <img src={employee.posterPath} alt="employee picture"/>
            ) : (
                <img
                    src="https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67b4cd769b05981b7a585395/previews/preview2x/download/Planche_avatar14.webp"
                    alt="default employee"
                />
            )}
            <div className={"employee-card-info"}>
                <p className={"employees-p-list"}>Poste : {employee.job}</p>
                <p className={"employees-p-list"}>Salaire : {employee.salary} €</p>
                <p className={"employees-p-list"}>Niveau: {employee.level}</p>
                <p className={"employees-p-list"}>Humeur: {employee.mood}</p>
                <p className={"employees-p-list"}>Santé : {employee.health}%</p>
                <progress value={employee.health} max="100"></progress>
                <EmployeeCardButtons/>
            </div>
        </div>
    );
};

export default EmployeeItem;
