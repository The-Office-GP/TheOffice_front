import {FC} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem2.css"

const EmployeeItem2: FC<{employee:EmployeeType}> = ({employee}) => {
    return (
        <div className="employee-card">
            <div className="infos">
                <div className="image">
                    <img src={employee.image} alt="employee picture"/>
                    <progress value={employee.health} max="100"></progress>
                </div>
                <div className="info">
                    <div>
                        <p className="name">
                            {employee.name}
                        </p>
                        <p className="function">
                            {employee.job}
                        </p>
                    </div>
                    <div className="stats">
                        <p className="flex flex-col">
                            Level
                            <span className="state-value">
                            {employee.level - 4}
                        </span>
                        </p>
                        <p className="flex">
                            Salaire
                            <span className="state-value">
                            {employee.salary}€
                        </span>
                        </p>
                        <p className="flex flex-col">
                            Humeur
                            <span className="state-value">
                            {employee.mood}
                        </span>
                        </p>

                    </div>
                </div>
            </div>
            <button className="request" type="button">
                Licencier
            </button>
        </div>
    );
};

export default EmployeeItem2;
