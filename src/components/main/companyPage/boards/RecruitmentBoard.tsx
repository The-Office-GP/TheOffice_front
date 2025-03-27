import {FC, useEffect, useState} from 'react';
import {Grid2} from "@mui/material";
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeItem from "../employeeComponents/EmployeeItem";
import {getTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";
import "../../../../@styles/main/components/companyPage/recruitmentBoard.css"
import {CompanyDetailsType} from "../../../../@types/companyType";
import {useContext} from 'react';
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {saveCompanyInfo} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {useParams} from "react-router";

const RecruitmentBoard: FC<{ }> = ({}) => {
    const params = useParams()
    const [listEmployeeForRecruitment, setListEmployeeForRecruitment] = useState<EmployeeType[]>([]);
    const [showRecruitmentError, setShowRecruitmentError] = useState(false);
    const companyContext = useContext(CompanyContext);
    const limitEmployees = companyContext.company.local.maxEmployees;

    useEffect(() => {
        collectEmployeeForRecruitment()
    }, []);

    useEffect(() => {
        console.log(companyContext.company.employees)
    }, [companyContext]);

    const collectEmployeeForRecruitment = async () => {
        try {
            const response = await getTheOfficeDbUser(`/employees/generate`, getToken());
            setListEmployeeForRecruitment(response);
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };

    // Fonction de gestion du recrutement
    const handleRecruitment = (employee: EmployeeType) => {
        if (companyContext.company.employees.length >= limitEmployees) {
            setShowRecruitmentError(true);
            setTimeout(() => {
                setShowRecruitmentError(false);
            }, 3000);
            return;
        }
        const company: CompanyDetailsType = {
            ...companyContext.company,
            employees: [...companyContext.company.employees, employee] // Utilisation de la syntaxe spread pour éviter de muter l'état
        };

        console.log(company.employees)

        const id = Number(params.id)
        saveCompanyInfo(id, company, companyContext.setCompany);

        setListEmployeeForRecruitment(listEmployeeForRecruitment.filter((item) => item !== employee)); // Retirer de la liste des recrues
    };

    return (
        <>
            <h3>Recrutement</h3>
            <div className={"div-assistante"}>
                <img className={'recruitment-img'}
                     src={"/assets/Employees/employees-avatars/anneLise.png"}
                     alt={"recruitment-people"}/>
                <span>Voici des salariés que l'on pourrait recruter pour notre entreprise</span>
            </div>
            <div className={"recruitment-card-display"}>
                {listEmployeeForRecruitment.map((employee, index) => (
                    <EmployeeItem
                        key={index}
                        employee={employee}
                        type={"recruitment"}
                        listParent={listEmployeeForRecruitment}
                        setListParent={setListEmployeeForRecruitment}
                        onRecruit={() => handleRecruitment(employee)}
                    />
                ))}
            </div>

            {/* Bulle de notification */}
            {showRecruitmentError && (
                <div className="recruitment-error-bubble">
                    <p>Vous avez atteint la limite de salariés ! Agrandissez votre local pour en recruter plus.</p>
                </div>
            )}
        </>
    );
};

export default RecruitmentBoard;
