import {FC} from 'react';
import "../../../@styles/b_main/components/companyPage/employeeBoard.css"

const EmployeeBoard: FC<{}> = ({}) => {
    return (
        <section className={"office-background-section"} id={"list-section"}>
            <div className={"display-container"}>
                <aside className={"employees-aside"}>
                    <div className={"icon-title"}>
                        <PeopleIcon className={"menu-Icon"}/>
                        <h3>Mes salariés</h3>
                    </div>
                    <EmployeesJobsButtons/>
                    <EmployeesLevelButtons/>
                    <RecuiteButton/>
                </aside>
                <Grid2 className={"employees-cards-container"}>
                    <EmployeeList/>
                </Grid2>
            </div>
        </section>
    );
};

export default EmployeeBoard;
