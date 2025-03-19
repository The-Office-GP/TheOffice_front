import {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import "../../../../@styles/main/components/companyPage/employeeBoard.css"
import PeopleIcon from "@mui/icons-material/People";
import EmployeeJobButtons from "../employeeComponents/EmployeesJobButtons";
import EmployeeLevelButtons from "../employeeComponents/EmployeeLevelButtons";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import ExitButton from "../../../share/ExitButton";
import RecruitmentBoard from "./RecruitmentBoard";
import EmployeeItem2 from "../employeeComponents/EmployeeItem2";
import {EmployeeType} from "../../../../@types/employeeType";
import {MachineType} from "../../../../@types/MachineType";
import employeeList from "../employeeComponents/EmployeeList";
import MachineItem2 from "../employeeComponents/MachineItem2";
import MachineLevelButtons from "../employeeComponents/MachineLevelButtons";
import BuyMachineBoard from "./BuyMachineBoard";


const MachineBoard: FC<{ setPage: Dispatch<SetStateAction<number>> }> = ({setPage}) => {
    const companyContext = useContext(CompanyContext)
    const [machineList, setMachineList] = useState<MachineType[]>(companyContext.company.machines)
    const [stateBoard, setStateBoard] = useState<boolean>(false)

    return (
        <section className={"office-background-section"} id={"list-section"}>
            <ExitButton setPage={setPage}/>
            {!stateBoard ?
                <div className={"display-container"}>
                    <section className={"employees-cards-container"}>
                        <div className={"icon-title"}>
                            <PeopleIcon className={"menu-Icon"}/>
                            <h3>Mes machines</h3>
                        </div>
                        <div className={"employees-list"}>
                            {machineList.map((machine) => (<MachineItem2 machine={machine}/>))}
                        </div>
                    </section>
                    <aside className={"employees-aside"}>
                        <MachineLevelButtons/>
                        <button className={"recuite-button"} onClick={() => setStateBoard(true)}>Acheter</button>
                    </aside>
                </div>
                :
                <BuyMachineBoard/>
            }
        </section>
    );
};

export default MachineBoard;
