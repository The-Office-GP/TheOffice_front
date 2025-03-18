import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeLevelButtons.css"

const MachineLevelButtons: FC<{}> = ({}) => {
    return (
        <div className={"level-buttons-container"}>
            <button className={"level-button"}>Niveau 1</button>
            <button className={"level-button"}>Niveau 2</button>
            <button className={"level-button"}>Niveau 3</button>
            <button className={"level-button"}>Niveau 4</button>
        </div>
    );
};

export default MachineLevelButtons;
