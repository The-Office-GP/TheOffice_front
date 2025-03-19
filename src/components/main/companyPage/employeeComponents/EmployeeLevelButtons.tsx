import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeLevelButtons.css"

const EmployeeLevelButtons: FC<{}> = ({}) => {
    return (
        <div className={"level-buttons-container"}>
            <button className={"level-button"}>Niveau 1</button>
            <button className={"level-button"}>Niveau 2</button>
            <button className={"level-button"}>Niveau 3</button>
            <button className={"level-button"}>Niveau 4</button>
            <button className={"level-button"}>Niveau 5</button>
            <button className={"level-button"}>Niveau 6</button>
        </div>
    );
};

export default EmployeeLevelButtons;
