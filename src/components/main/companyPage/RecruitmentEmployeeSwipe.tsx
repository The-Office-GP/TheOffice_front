import {FC} from 'react';
import {EmployeeType} from "../../../@types/employeeType";
import CardProfile from "./cards/CardProfile";

const RecruitmentEmployeeSwipe: FC<{listForRecruitement:EmployeeType[]}> = ({listForRecruitement}) => {
    return (
        <div className="employee-swipe-container flex justify-center items-center h-screen">
            {listForRecruitement.map((employee, index) => (<CardProfile key={index} employeeForRecruitment={employee}/>))}
        </div>
    );
};

export default RecruitmentEmployeeSwipe;
