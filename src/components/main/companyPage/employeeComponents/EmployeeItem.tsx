import {FC, useContext} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeCardButtons from "./EmployeeCardButtons";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem.css"
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {getTheOfficeDbUser, postTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";
import {LocalType} from "../../../../@types/companyType";

const EmployeeItem: FC<{employee:EmployeeType, type:string}> = ({employee, type}) => {
    const companyContext = useContext(CompanyContext)

    const addEmployee = () => {
        companyContext.company.employees.push(employee)

    }

    const recruitmentAPI = async () => {
        try {
            const data = {
                sector: companyContext.company.sector,
                name: companyContext.company.name,
                idUser: companyContext.company.idUser,
                local: companyContext.company.sector,
                wallet: companyContext.company.sector,
                cycles: companyContext.company.sector,
                machines: companyContext.company.sector,
                employees: companyContext.company.sector,
                suppliers: companyContext.company.sector,
                events: companyContext.company.sector,
                stockMaterials: companyContext.company.sector,
                stockFinalMaterials: companyContext.company.sector,
            }

            await postTheOfficeDbUser(`/employees/generate`, data, getToken());

            setListEmployeeForRecruitment(response)
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };

    return (
        <div className="employee-card">
            <h3>{employee.name}</h3>
            {/* Vérification si posterPath existe */}
            {employee.posterPath ? (
                <img src={employee.posterPath} alt="employee picture"/>
            ) : (
                <img
                    src="https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67b4cd769b05981b7a585395/previews/preview2x/download/Planche_avatar14.webp"
                    alt="default employee"
                />
            )}
            <div className={"employee-card-info"}>
                <p className={"employees-p-list"}>Poste : {employee.job}</p>
                <p className={"employees-p-list"}>Salaire : {employee.salary} €</p>
                <p className={"employees-p-list"}>Niveau: {employee.level}</p>
                <p className={"employees-p-list"}>Humeur: {employee.mood}</p>
                <p className={"employees-p-list"}>Santé : {employee.health}%</p>
                <progress value={employee.health} max="100"></progress>
                {type === "companyTeam" ?
                    <EmployeeCardButtons/>
                :
                    <button className={"increase-button"} onClick={() => companyContext.company.employees.push(employee)}>Recrutement</button>
                }
            </div>
        </div>
    );
};

export default EmployeeItem;
