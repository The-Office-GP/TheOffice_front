import {FC, useEffect} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem2.css"
import {MachineType} from "../../../../@types/MachineType";

const MachineItem2: FC<{ machineInCompany: MachineType }> = ({machineInCompany}) => {
    useEffect(() => {
        console.log(machineInCompany)
    }, []);
    return (
        <div className="card-item">
            <div className="infos">
                <div className="image">
                    <img src={machineInCompany.image} alt="employee picture"/>
                </div>
                <div className="info">
                    <div>
                        <p className="name">
                            {machineInCompany.name}
                        </p>
                        <p className="function">
                            {machineInCompany.productionQuality}
                        </p>
                    </div>
                    <div className="stats">
                        <p className="flex flex-col">
                            Prix
                            <span className="state-value">
                            {machineInCompany.price}€
                        </span>
                        </p>
                        <p className="flex">
                            Coût d'entretien
                            <span className="state-value">
                            {machineInCompany.maintenanceCost}€
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
