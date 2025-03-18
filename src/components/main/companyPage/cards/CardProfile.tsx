import {FC} from 'react';
import {EmployeeType} from "../../../../@types/employeeType";
import "../../../../@styles/main/components/companyPage/recruitmentCard.css"

const CardProfile: FC<{employeeForRecruitment:EmployeeType}> = ({employeeForRecruitment}) => {
    return (
        <div className="recruitment-card">
            <div className={"candidate-picture-name"}>
                <h3 className="text-xl font-bold">{employeeForRecruitment.name}</h3>
                <img src="/" alt={"avatar du candidat"} className={"candidat-picture"}/>
            </div>
            <div className="w-full bg-black bg-opacity-70 text-white p-4 rounded-b-2xl">
                <p className="text-sm">Poste: {employeeForRecruitment.job}</p>
                <p className="text-sm">Salaire: {employeeForRecruitment.salary}€</p>
                <p className="text-sm">Niveau: {employeeForRecruitment.level}</p>
            </div>
        </div>
    );
};

export default CardProfile;
