import {Dispatch, FC, SetStateAction, useContext} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeCardButtons from "./EmployeeCardButtons";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem.css";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {MachineType} from "../../../../@types/MachineType";
import {LocalType} from "../../../../@types/companyType";

const EmployeeItem: FC<{employee:EmployeeType, type:string, setListParent:Dispatch<SetStateAction<EmployeeType[]>>}> = ({employee, type, setListParent}) => {
    const companyContext = useContext(CompanyContext)

    const addEmployee = () => {
        companyContext.company.employees.push(employee)
        const idCheck = companyContext.company.employees.indexOf(employee)
        companyContext.setCompany(
            {
                id: companyContext.company.id,
                sector: companyContext.company.sector,
                name: companyContext.company.name,
                popularity: companyContext.company.popularity,
                idUser: companyContext.company.idUser,
                local: companyContext.company.local,
                wallet: companyContext.company.wallet,
                cycles: companyContext.company.cycles,
                machines: companyContext.company.machines,
                employees: companyContext.company.employees.splice(idCheck, 1),
                suppliers: [],
                events: [],
                stockMaterials: [],
                stockFinalMaterials: [],
            }
        )
        setListParent(companyContext.company.employees.splice(idCheck, 1))
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
