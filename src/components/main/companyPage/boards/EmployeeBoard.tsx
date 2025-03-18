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



const EmployeeBoard: FC<{setPage:Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    const companyContext = useContext(CompanyContext)
    const [stateBoard, setStateBoard] = useState<boolean>(false)

    return (
        <section className={"office-background-section"} id={"list-section"}>
            <ExitButton setPage={setPage}/>
            {!stateBoard ?
                <div className={"display-container"}>
                    <aside className={"employees-aside"}>
                        <div className={"icon-title"}>
                            <PeopleIcon className={"menu-Icon"}/>
                            <h3>Mes salariés</h3>
                        </div>
                        <EmployeeJobButtons/>
                        <EmployeeLevelButtons/>
                        <button className={"recuite-button"} onClick={() => setStateBoard(true)}>Recruter</button>
                    </aside>
                    <Grid2 className={"employees-cards-container"}>
                        <EmployeeList employeesData={companyContext.company.employees}/>
                    </Grid2>
                </div>
            :
                <RecruitmentBoard/>
            }
        </section>
    );
};

export default EmployeeBoard;
