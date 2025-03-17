import {FC} from 'react';
import EmployeeItem from "./EmployeeItem";
import {EmployeeType} from "../../../../_types/employeeType";

const EmployeeList: FC<{employeesData:EmployeeType[]}> = ({employeesData}) => {
    return (
        <div className="employees-list">
            {employeesData.map((employee:EmployeeType) => (
                <EmployeeItem key={employee.id} employee={{...employee, health: employee.health}}/>
            ))}
        </div>
    );
};

export default EmployeeList;
