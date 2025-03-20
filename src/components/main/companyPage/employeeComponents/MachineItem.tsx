import {Dispatch, FC, SetStateAction, useContext} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeCardButtons from "./EmployeeCardButtons";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem.css";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {MachineType} from "../../../../@types/MachineType";

const MachineItem: FC<{ machine:MachineType, type:string,purchaseIsMake:boolean, setPurchaseIsMake:Dispatch<SetStateAction<boolean>>}> = ({machine, type,purchaseIsMake , setPurchaseIsMake}) => {
    const companyContext = useContext(CompanyContext)

    const addMachine = () => {
        if(!purchaseIsMake){
            companyContext.company.machines.push(machine)
            setPurchaseIsMake(true)
            setTimeout(() => {
                setPurchaseIsMake(false)
            }, 1000);
        }
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
                        onClick={addMachine}>Acheter</button>
            }
        </div>
    );
};

export default MachineItem;
