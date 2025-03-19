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
        <>
            <h3>Recrutement</h3>
            <div className={"div-assistante"}>
                <img className={'recruitment-img'}
                     src={"/assets/Employees/employees-avatars/anneLise.png"}
                     alt={"recruitment-people"}/>
                <span>Voici des machines que l'on pourrait acheter pour notre entreprise</span>
            </div>
            <div className={"recruitment-card-display"}>
                {listEmployeeForRecruitment.map((employee, index) => (<EmployeeItem key={index} employee={employee} type={"recruitment"} setListParent={setListEmployeeForRecruitment}/>))}
            </div>

        </>
    );
};

export default RecruitmentBoard;
