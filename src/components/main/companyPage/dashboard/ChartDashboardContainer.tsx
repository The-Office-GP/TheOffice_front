import {FC} from 'react';
import CardSellValue from "./CardSellValue";
import CardSellProduct from "./CardSellProduct";
import CardTableProduct from "./CardTableProduct";
import CardTableSalary from "./CardTableSalary";
import {CompanyDetailsType, Statistic} from "../../../../@types/companyType";

const ChartDashboardContainer: FC<{company:CompanyDetailsType}> = ({company}) => {
    return (
        <div className={"chart-dashboard"}>
            <div className={"sell-value-container"}>
                <CardSellValue/>
                <CardSellProduct company={company}/>
            </div>
        </div>
    );
};

export default ChartDashboardContainer;
