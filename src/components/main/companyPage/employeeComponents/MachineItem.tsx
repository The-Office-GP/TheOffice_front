import {Dispatch, FC, SetStateAction, useContext} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeCardButtons from "./EmployeeCardButtons";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem.css";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {MachineShortType, MachineType} from "../../../../@types/MachineType";
import {saveCompanyInfo} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {useParams} from "react-router";

interface MachineItemProps{
    machine: MachineType;
    type: string;
    purchaseIsMake: boolean;
    setPurchaseIsMake: Dispatch<SetStateAction<boolean>>;
    onBuy: () => void;
}

const MachineItem: FC<MachineItemProps> = ({machine, type,purchaseIsMake , setPurchaseIsMake, onBuy}) => {
    const companyContext = useContext(CompanyContext)
    const params = useParams()

    const addMachine = () => {
        if(!purchaseIsMake){
            const id = Number(params.id);
            companyContext.company.machinesInCompany.push({id:0, machineId:machine.id, companyId:id} as MachineShortType)
            saveCompanyInfo(id, companyContext.company, companyContext.setCompany)
            setPurchaseIsMake(true)
            onBuy();
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
