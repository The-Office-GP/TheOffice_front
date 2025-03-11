import {FC} from 'react';
import "../../../@styles/b_main/components/companyPage/companyCard.css";

const CompanyCard: FC<{companyName:string, pathImages:string}> = ({companyName, pathImages}) => {
    return (
        <>
            <div className={"company-card"}>
                <h3>{companyName}</h3>
                <div>
                    <img src={pathImages} alt={"img model company"} className={"company-card-img"}/>
                </div>
            </div>
        </>
    );
};

export default CompanyCard;
