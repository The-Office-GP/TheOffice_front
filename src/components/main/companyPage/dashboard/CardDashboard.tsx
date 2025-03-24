import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/gameDashboard.css"
import {SvgIconProps} from "@mui/material";

interface CardDashboardProps {
    Icon: React.ElementType<SvgIconProps>;
    title: string;
    value: number;
}

const CardDashboard: FC<CardDashboardProps> = ({Icon, title, value}) => {
    return (
        <div className="card-dashboard card-stats mb-4 mb-xl-0">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h3 className="card-title text-uppercase text-muted mb-0">{title}</h3>
                        <span className="h2 font-weight-bold mb-0">{value}</span>
                    </div>
                    <div className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <Icon/>
                        </div>
                    </div>
                </div>
                <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                    <span className="text-nowrap">Since last month</span>
                </p>
            </div>
        </div>
    );
};

export default CardDashboard;