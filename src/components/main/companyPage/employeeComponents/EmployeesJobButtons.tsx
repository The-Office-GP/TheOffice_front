import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeJobButtons.css"

const EmployeeJobButtons: FC<{}> = ({}) => {
    return (
        <div className={"job-buttons-container"}>
            <button className={"job-button"}>Marketing</button>
            <button className={"job-button"}>Vente</button>
            <button className={"job-button"}>Production</button>
        </div>
    );
};

export default EmployeeJobButtons;
