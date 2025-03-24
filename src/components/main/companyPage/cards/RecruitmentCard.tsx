import {FC, useState} from 'react';
import NoChoiceButton from "../event/NoChoiceButton";
import RecruitmentEmployeeSwipe from "../RecruitmentEmployeeSwipe";
import {getTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";
import {EmployeeType} from "../../../../@types/employeeType";
import YesChoiceButton from "../event/YesChoiceButton";
import "../../../../@styles/main/components/companyPage/recruitmentCard.css"

const RecruitmentCard: FC<{}> = ({}) => {
    const [listEmployeeForRecruitment, setListEmployeeForRecruitment] = useState<EmployeeType[]>([])
    const collectEmployeeForRecruitment = async () => {
        try {
            const response = await getTheOfficeDbUser(`/employees/generate`, getToken());
            setListEmployeeForRecruitment(response)
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };


    return (
        <div className={"recruitment-cards-container"}>
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
            <div className={"choice-container"}>
                <NoChoiceButton/>
                <RecruitmentEmployeeSwipe listForRecruitement={listEmployeeForRecruitment}/>
                <YesChoiceButton/>
            </div>
        </div>
    );
};

export default RecruitmentCard;