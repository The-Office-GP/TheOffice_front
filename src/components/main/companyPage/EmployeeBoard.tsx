import {FC, useContext} from 'react';
import "../../../@styles/main/components/companyPage/employeeBoard.css"
import PeopleIcon from "@mui/icons-material/People";
import EmployeeJobButtons from "./employeeComponents/EmployeesJobButtons";
import EmployeeLevelButtons from "./employeeComponents/EmployeeLevelButtons";
import {Grid2} from "@mui/material";
import EmployeeList from "./employeeComponents/EmployeeList";
import {CompanyContext} from "../../../contexts/CompanyContext";



const EmployeeBoard: FC<{}> = ({}) => {
    const companyContext = useContext(CompanyContext)

    return (
        <section className={"office-background-section"} id={"list-section"}>
            <div className={"display-container"}>
                <aside className={"employees-aside"}>
                    <div className={"icon-title"}>
                        <PeopleIcon className={"menu-Icon"}/>
                        <h3>Mes salariés</h3>
                    </div>
                    <EmployeeJobButtons/>
                    <EmployeeLevelButtons/>
                    <button className={"recuite-button"}>Recruter</button>
                </aside>
                <Grid2 className={"employees-cards-container"}>
                    <EmployeeList employeesData={companyContext.company.employees}/>
                </Grid2>
            </div>
        </section>
    );
};

export default EmployeeBoard;
