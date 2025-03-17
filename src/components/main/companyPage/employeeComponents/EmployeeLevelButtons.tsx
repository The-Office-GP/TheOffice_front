import {FC} from 'react';
import "../../../../@styles/b_main/components/companyPage/employeeConponentsStyles/employeeLevelButtons.css"

const EmployeeLevelButtons: FC<{}> = ({}) => {
    return (
        <div className={"level-buttons-container"}>
            <button className={"level-button"}>Niveau 5</button>
            <button className={"level-button"}>Niveau 6</button>
            <button className={"level-button"}>Niveau 7</button>
            <button className={"level-button"}>Niveau 8</button>
            <button className={"level-button"}>Niveau 9</button>
            <button className={"level-button"}>Niveau 10</button>
        </div>
    );
};

export default EmployeeLevelButtons;
