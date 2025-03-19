import {FC, useContext} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeCardButtons from "./EmployeeCardButtons";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem.css";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {MachineType} from "../../../../@types/MachineType";

const MachineItem: FC<{ machine: MachineType, type: string }> = ({machine, type}) => {
    const companyContext = useContext(CompanyContext)

    const addMachine = () => {
        companyContext.company.machines.push(machine)
    }

    return (
        <div className="employee-card">
            <img src={machine.image} alt="employee picture"/>
            <div className={"info-container"}>
                <span> {machine.name}</span>
                <span className="job"> {machine.productionQuality}</span>
                <span className={"info"}>Prix : {machine.price}</span>
                <span className={"info"}>Cout d'entretien : {machine.maintenanceCost}€</span>
            </div>

            {type === "companyTeam" ?
                <EmployeeCardButtons/>
                :
                <button className={"increase-button"}
                        onClick={() => companyContext.company.machines.push(machine)}>Acheter</button>
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

export default MachineItem;
