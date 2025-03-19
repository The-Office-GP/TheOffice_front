import {Dispatch, FC, SetStateAction, useContext} from 'react';
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeJobButtons.css"
import {EmployeeType} from "../../../../@types/employeeType";
import {CompanyContext} from "../../../../contexts/CompanyContext";

const EmployeeJobButtons: FC<{setEmployeeList:Dispatch<SetStateAction<EmployeeType[]>>}> = ({setEmployeeList}) => {
    const companyContext = useContext(CompanyContext)
    return (
        <div className={"job-buttons-container"}>
            <button className={"job-button"} onClick={() => setEmployeeList(companyContext.company.employees)}>Tous</button>
            <button className={"job-button"}
                    onClick={() => setEmployeeList(companyContext.company.employees.filter((employee) => (employee.job === "MARKETING")))}>Marketing</button>
            <button className={"job-button"}
                    onClick={() => setEmployeeList(companyContext.company.employees.filter((employee) => (employee.job === "VENTE")))}>Vente</button>
            <button className={"job-button"}
                    onClick={() => setEmployeeList(companyContext.company.employees.filter((employee) => (employee.job === "PRODUCTION")))}>Production</button>
        </div>
    );
};

export default EmployeeJobButtons;
