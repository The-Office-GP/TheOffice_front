import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/gameDashboard.css"
import {SvgIconProps} from "@mui/material";

interface CardDashboardProps {
    Icon: React.ElementType<SvgIconProps>;
    title: string;
    value: number;
    difference: number;
}

const CardDashboard: FC<CardDashboardProps> = ({Icon, title, value, difference}) => {
    return (
        <div className="card-dashboard card-stats mb-4 mb-xl-0">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">{title}</h5>
                        <span className="h2 font-weight-bold mb-0">{value}</span>
                    </div>
                    <div className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <Icon/>
                        </div>
                    </div>
                </div>
                <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2"><i className="fa fa-arrow-up"></i>{difference}%</span>
                    <span className="text-nowrap">Since last month</span>
                </p>
            </div>
        </div>
    );
};

export default CardDashboard;
