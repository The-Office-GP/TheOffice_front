import {Dispatch, FC, SetStateAction, useContext, useEffect} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeCardButtons from "./EmployeeCardButtons";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem.css";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {MachineType} from "../../../../@types/MachineType";
import {LocalType} from "../../../../@types/companyType";

const EmployeeItem: FC<{employee:EmployeeType, type:string,listParent:EmployeeType[], setListParent:Dispatch<SetStateAction<EmployeeType[]>>}> = ({employee, type,listParent, setListParent}) => {
    const companyContext = useContext(CompanyContext)

    useEffect(() => {
        console.log(employee)
    }, []);

    const addEmployee = () => {
        companyContext.company.employees.push(employee)
        setListParent(listParent.filter((item)=> item !== employee))
    }

    return (
        <div className="obtain-item-card">
            <img src={employee.image} alt="employee picture"/>
            <div className={"info-container"}>
                <span> {employee.name}</span>
                <span className="job"> {employee.job}</span>
                <span className={"info"}>Niveau : {employee.level - 4}</span>
                <span className={"info"}>Salaire : {employee.salary}€</span>
            </div>

            {type === "companyTeam" ?
                <EmployeeCardButtons/>
                :
                <button className={"increase-button"}
                        onClick={addEmployee}>Recrutement</button>
            }
        </div>
    );
};

export default EmployeeItem;
