import {FC} from 'react';
import "../../../@styles/b_main/components/userPage/companyCard.css";

const CompanyCard: FC<{companyId:number, companyName:string, pathImages:string}> = ({companyId, companyName, pathImages}) => {
    const path = `/company/${companyId}`
    return (
        <>
            <div className={"company-card"}>
                <h3>{companyName}</h3>
                <a href={path}>
                    <img src={pathImages} alt={"img model company"} className={"company-card-img"}/>
                </a>
            </div>
        </>
    );
};

export default CompanyCard;
