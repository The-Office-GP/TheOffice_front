import {FC, useContext} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeCardButtons from "./EmployeeCardButtons";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem.css";
import {CompanyContext} from "../../../../contexts/CompanyContext";

const EmployeeItem: FC<{employee:EmployeeType, type:string}> = ({employee, type}) => {
    const companyContext = useContext(CompanyContext)

    const addEmployee = () => {
        companyContext.company.employees.push(employee)
    }

    return (
        <div className="employee-card">
            <img src={employee.image} alt="employee picture"/>
            <div className={"info-container"}>
                <span> {employee.name}</span>
                <span className="job"> {employee.job}</span>
                <span className={"info"}>Niveau : {employee.level - 4}</span>
                <span className={"info"}>Salaire : {employee.salary}€</span>
            </div>

            {type === "companyTeam" ?
                <EmployeeCardButtons/>
                :
                <button className={"increase-button"}
                        onClick={() => companyContext.company.employees.push(employee)}>Recrutement</button>
            }
        </div>
        /*<div className="employee-card">
            <div className="employee-card-title">
                {employee.image ? (
                    <img src={employee.image} alt="employee picture"/>
                ) : (
                    <img src="/logo192.png" alt="employee picture"/>

                )}
                <h3>{employee.name}</h3>
            </div>
            <div className={"employee-card-info"}>
                <p className={"employees-p-list"}>Poste : {employee.job}</p>
                <p className={"employees-p-list"}>Salaire : {employee.salary} €</p>
                <p className={"employees-p-list"}>Niveau: {employee.level}</p>
                <p className={"employees-p-list"}>Humeur: {employee.mood}</p>
                <p className={"employees-p-list"}>Santé : {employee.health}%</p>
                <progress value={employee.health} max="100"></progress>
                {type === "companyTeam" ?
                    <EmployeeCardButtons/>
                :
                    <button className={"increase-button"} onClick={() => companyContext.company.employees.push(employee)}>Recrutement</button>
                }
            </div>
        </div>*/
    );
};

export default EmployeeItem;
