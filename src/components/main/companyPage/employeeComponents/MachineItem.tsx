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
        <div className="obtain-item-card">
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
    );
};

export default MachineItem;
