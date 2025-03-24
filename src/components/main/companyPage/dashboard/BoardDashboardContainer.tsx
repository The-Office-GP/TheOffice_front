import {FC} from 'react';
import CardTableProduct from "./CardTableProduct";
import CardTableSalary from "./CardTableSalary";
import {CompanyDetailsType} from "../../../../@types/companyType";

const BoardDashboardContainer: FC<{company:CompanyDetailsType}> = ({company}) => {
    return (
        <div className={"product-value-container"}>
            <CardTableProduct company={company}/>
            <CardTableSalary/>
        </div>
    );
};

export default BoardDashboardContainer;
