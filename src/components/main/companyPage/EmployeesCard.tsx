import {FC} from 'react';
import PeopleIcon from "@mui/icons-material/People";
import "../../../@styles/b_main/components/companyPage/employeesCard.css"

const EmployeesCard: FC<{}> = ({}) => {
    return (
        <div className={"metrics-card"}>
            <div className={"icon-title"}>
                <PeopleIcon className={"dashboard-icon"}/>
                <h4> RH</h4>
            </div>
            <ul className={"metrics-list"}>
                <li>Salariés : employeesValue</li>
                <li>Charges sociales : chargesValue</li>
                <li>Humeure : moodValue</li>
            </ul>
        </div>
    );
};

export default EmployeesCard;
