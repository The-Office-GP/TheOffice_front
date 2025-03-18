import {FC, useContext} from 'react';
import EmployeeItem from "./EmployeeItem";
import {EmployeeType} from "../../../../@types/employeeType";
import {CompanyContext} from "../../../../contexts/CompanyContext";

const EmployeeList: FC<{employeesData:EmployeeType[]}> = ({employeesData}) => {
    const companyContext = useContext(CompanyContext)
    return (
        <div className="employees-list">
            {employeesData.map((employee:EmployeeType) => (
                <EmployeeItem key={employee.id} employee={employee} type={"companyTeam"}/>
            ))}
        </div>
    );
};

export default EmployeeList;
