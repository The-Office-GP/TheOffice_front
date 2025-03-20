import {Dispatch, FC, SetStateAction, useContext, useEffect} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeCardButtons from "./EmployeeCardButtons";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/employeeItem.css";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {MachineType} from "../../../../@types/MachineType";
import {LocalType} from "../../../../@types/companyType";
import {postTheOfficeDbUser, putTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";
import {useParams} from "react-router";

const EmployeeItem: FC<{employee:EmployeeType, type:string,listParent:EmployeeType[], setListParent:Dispatch<SetStateAction<EmployeeType[]>>}> = ({employee, type,listParent, setListParent}) => {
    const companyContext = useContext(CompanyContext)
    const id = useParams()

    useEffect(() => {
        console.log(employee)
    }, []);

    const addEmployee = () => {
        companyContext.company.employees.push(employee)
        saveCompanyInfo()
        setListParent(listParent.filter((item)=> item !== employee))
    }

    const saveCompanyInfo = async ()=> {
        try {
            const data = {
                sector: companyContext.company.sector,
                name: companyContext.company.name,
                popularity: companyContext.company.popularity,
                userId: companyContext.company.idUser,
                local: companyContext.company.local,
                machines: companyContext.company.machines,
                wallet: companyContext.company.wallet,
                cycles: companyContext.company.cycles,
                employees: companyContext.company.employees,
                suppliers: companyContext.company.suppliers,
                events: companyContext.company.events,
                stockMaterials: companyContext.company.stockMaterials,
                stockFinalMaterials: companyContext.company.stockFinalMaterials
            }
            console.log(data)
            await putTheOfficeDbUser(`/companies/${id.id}`, data, getToken());
        } catch (error) {
            console.error('Erreur lors de la sauvegarde:', error);
        }
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
