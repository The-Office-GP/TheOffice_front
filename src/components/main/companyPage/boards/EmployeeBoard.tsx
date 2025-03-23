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



const EmployeeBoard: FC<{setPage:Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    const companyContext = useContext(CompanyContext)
    const [employeeList, setEmployeeList] = useState<EmployeeType[]>(companyContext.company.employees)
    const [stateBoard, setStateBoard] = useState<boolean>(false)

    return (
        <section className={"office-background-section"} id={"list-section"}>
            {!stateBoard ?
                <div className={"display-container"}>
                    <ExitButton setPage={setPage}/>
                    <section className={"item-cards-container"}>
                        <div className={"icon-title"}>
                            <PeopleIcon className={"menu-Icon"}/>
                            <h3>Mes salariés</h3>
                        </div>
                        <div className={"item-list"}>
                            {employeeList.map((employee) => (<EmployeeItem2 employee={employee}/>))}
                        </div>
                    </section>
                    <aside className={"employees-aside"}>
                        <div>
                            <h3 className={"filter-title"}>Filtres</h3>
                            <EmployeeJobButtons setEmployeeList={setEmployeeList}/>
                            <EmployeeLevelButtons setEmployeeList={setEmployeeList}/>
                        </div>
                        <button className={"recuite-button"} onClick={() => setStateBoard(true)}>Recruter</button>
                    </aside>
                </div>
            :
                <div className={"display-container2"}>
                    <ExitButton setPage={setPage}/>
                    <RecruitmentBoard/>
                </div>
            }
        </section>
    );
};

export default EmployeeBoard;