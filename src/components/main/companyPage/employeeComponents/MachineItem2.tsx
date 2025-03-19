import {FC} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem2.css"
import {MachineType} from "../../../../@types/MachineType";

const MachineItem2: FC<{ machine: MachineType }> = ({machine}) => {
    return (
        <div className="employee-card">
            <div className="infos">
                <div className="image">
                    <img src={machine.image} alt="employee picture"/>
                </div>
                <div className="info">
                    <div>
                        <p className="name">
                            {machine.name}
                        </p>
                        <p className="function">
                            {machine.productionQuality}
                        </p>
                    </div>
                    <div className="stats">
                        <p className="flex flex-col">
                            Prix
                            <span className="state-value">
                            {machine.price}€
                        </span>
                        </p>
                        <p className="flex">
                            Coût d'entretien
                            <span className="state-value">
                            {machine.maintenanceCost}€
                        </span>
                        </p>

                    </div>
                </div>
            </div>
            <button className="request" type="button">
                Revendre
            </button>
        </div>
    );
};

export default MachineItem2;
