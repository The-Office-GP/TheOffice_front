import {FC, useEffect, useState} from 'react';
import {Grid2} from "@mui/material";
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeItem from "../employeeComponents/EmployeeItem";
import {getTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";

const RecruitmentBoard: FC<{}> = ({}) => {
    const [listEmployeeForRecruitment, setListEmployeeForRecruitment] = useState<EmployeeType[]>([])

    useEffect(() => {
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
                    <p>Nous avons besoins de recruter. Anna Lyse, votre secrétaire vous a organisé une série
                        d'entretiens. Glissez la carte du candidat vers la gauche ou la droite pour faire votre
                        choix.</p>
                </div>
                <img className={'recruitment-img'}
                     src={"https://trello.com/1/cards/67b34f92a0acde729599d959/attachments/67b4d5aabbedb79add2c59e2/download/Avatar-planch2-f2.png"}
                     alt={"recruitment-people"}/>
            </div>
            <Grid2 className={"recruitment-card-display"}>
                {listEmployeeForRecruitment.map((employee, index) => (<EmployeeItem key={index} employee={employee} type={"recruitment"}/>))}
            </Grid2>

        </section>
    );
};

export default RecruitmentBoard;
