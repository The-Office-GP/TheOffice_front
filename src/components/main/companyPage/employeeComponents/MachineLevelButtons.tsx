import {Dispatch, FC, SetStateAction} from 'react';
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeLevelButtons.css"

const MachineLevelButtons: FC<{setFilter:Dispatch<SetStateAction<any>>}> = ({setFilter}) => {
    return (
        <div>
            <h3 className={"filter-title"}>Filtres</h3>
            <div className={"level-buttons-container"}>
                <button className={"level-button"} onClick={()=> setFilter({level:"ALL"})}>TOUTES</button>
                <button className={"level-button"} onClick={() => setFilter({level: "MEDIOCRE"})}>MEDIOCRE</button>
                <button className={"level-button"} onClick={() => setFilter({level: "NORMAL"})}>NORMAL</button>
                <button className={"level-button"} onClick={() => setFilter({level: "BONNE"})}>BONNE</button>
                <button className={"level-button"} onClick={() => setFilter({level: "PERFORMANTE"})}>PERFORMANTE</button>
            </div>
        </div>
    );
};

export default MachineLevelButtons;
