import {Dispatch, FC, SetStateAction, useContext} from 'react';
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeLevelButtons.css"
import {EmployeeType} from "../../../../@types/employeeType";
import {CompanyContext} from "../../../../contexts/CompanyContext";

const EmployeeLevelButtons: FC<{ setEmployeeList: Dispatch<SetStateAction<EmployeeType[]>> }> = ({setEmployeeList}) => {
    const companyContext = useContext(CompanyContext)
    return (
        <div className={"level-buttons-container"}>
            <button className={"level-button"} onClick={() => setEmployeeList(companyContext.company.employees)}>Tous</button>
            <button className={"level-button"} onClick={() => setEmployeeList(companyContext.company.employees.filter((employee)=>(employee.level === 5)))}>Niveau 1</button>
            <button className={"level-button"} onClick={() => setEmployeeList(companyContext.company.employees.filter((employee)=>(employee.level === 6)))}>Niveau 2</button>
            <button className={"level-button"} onClick={() => setEmployeeList(companyContext.company.employees.filter((employee)=>(employee.level === 7)))}>Niveau 3</button>
            <button className={"level-button"} onClick={() => setEmployeeList(companyContext.company.employees.filter((employee)=>(employee.level === 8)))}>Niveau 4</button>
            <button className={"level-button"} onClick={() => setEmployeeList(companyContext.company.employees.filter((employee)=>(employee.level === 9)))}>Niveau 5</button>
            <button className={"level-button"} onClick={() => setEmployeeList(companyContext.company.employees.filter((employee)=>(employee.level === 10)))}>Niveau 6</button>
        </div>
    );
};

export default EmployeeLevelButtons;