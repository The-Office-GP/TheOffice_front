import {FC, useEffect, useState} from 'react';
import {Grid2} from "@mui/material";
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeItem from "../employeeComponents/EmployeeItem";
import {getTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";
import "../../../../@styles/main/components/companyPage/recruitmentBoard.css"

const RecruitmentBoard: FC<{}> = ({}) => {
    const [listEmployeeForRecruitment, setListEmployeeForRecruitment] = useState<EmployeeType[]>([])

    useEffect(() => {
        console.log(listEmployeeForRecruitment)
        collectEmployeeForRecruitment()
    }, []);

    const collectEmployeeForRecruitment = async () => {
        try {
            const response = await getTheOfficeDbUser(`/employees/generate`, getToken());
            setListEmployeeForRecruitment(response)
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };

    return (
        <section className={"office-background-section"}>
            <div className={"recruitment-card-header"}>
                <div className={"h3-description"}>
                    <h3>Recrutement</h3>
                    <img className={'recruitment-img'}
                         src={"/assets/Employees/employees-avatars/anneLise.png"}
                         alt={"recruitment-people"}/>
                    <span>Nous avons besoins de recruter. Anna Lyse, votre secrétaire vous a organisé une série
                        d'entretiens. Glissez la carte du candidat vers la gauche ou la droite pour faire votre
                        choix.</span>
                </div>
            </div>
            <div className={"recruitment-card-display"}>
                {listEmployeeForRecruitment.map((employee, index) => (<EmployeeItem key={index} employee={employee} type={"recruitment"}/>))}
            </div>

        </section>
    );
};

export default RecruitmentBoard;
