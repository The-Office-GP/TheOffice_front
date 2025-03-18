import {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import "../../../../@styles/main/components/companyPage/employeeBoard.css"
import PeopleIcon from "@mui/icons-material/People";
import EmployeeJobButtons from "../employeeComponents/EmployeesJobButtons";
import EmployeeLevelButtons from "../employeeComponents/EmployeeLevelButtons";
import {Grid2} from "@mui/material";
import EmployeeList from "../employeeComponents/EmployeeList";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import ExitButton from "../../../share/ExitButton";
import RecruitmentBoard from "./RecruitmentBoard";
import EmployeeItem2 from "../employeeComponents/EmployeeItem2";



const EmployeeBoard: FC<{setPage:Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    const companyContext = useContext(CompanyContext)
    const [stateBoard, setStateBoard] = useState<boolean>(false)

    return (
        <section className={"office-background-section"} id={"list-section"}>
            <ExitButton setPage={setPage}/>
            {!stateBoard ?
                <div className={"display-container"}>
                    <section className={"employees-cards-container"}>
                        <div className={"icon-title"}>
                            <PeopleIcon className={"menu-Icon"}/>
                            <h3>Mes salariés</h3>
                        </div>
                        <div className={"employees-list"}>
                            {companyContext.company.employees.map((employee) => (<EmployeeItem2 employee={employee}/>))}
                        </div>
                    </section>
                    <aside className={"employees-aside"}>
                        <EmployeeJobButtons/>
                        <EmployeeLevelButtons/>
                        <button className={"recuite-button"} onClick={() => setStateBoard(true)}>Recruter</button>
                    </aside>
                </div>
            :
                <RecruitmentBoard/>
            }
        </section>
    );
};

export default EmployeeBoard;
