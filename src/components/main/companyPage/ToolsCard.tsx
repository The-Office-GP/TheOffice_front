import {FC} from 'react';
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import "../../../@styles/b_main/components/companyPage/toolsCard.css"

const ToolsCard: FC<{}> = ({}) => {
    return (
        <div className={"metrics-card"}>
            <div className={"icon-title"}>
                <PrecisionManufacturingIcon className={"dashboard-icon"}/>
                <h4> Matériel</h4>
            </div>
            <ul className={"metrics-list"}>
                <li>Machines : toolsValue</li>
                <li>Côut : chargesValue</li>
            </ul>
        </div>
    );
};

export default ToolsCard;
