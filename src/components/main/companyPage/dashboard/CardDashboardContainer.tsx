import {FC} from 'react';
import CardDashboard from "./CardDashboard";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import SellIcon from "@mui/icons-material/Sell";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import WalletIcon from "@mui/icons-material/Wallet";
import {Statistic} from "../../../../@types/companyType";

const CardDashboardContainer: FC<{statistics:Statistic[]}> = ({statistics}) => {
    return (
        <div className={"card-dashboard-container"}>
            {statistics.length > 0 ?
                <>
                    {statistics.length > 1 ?
                        <>
                            <CardDashboard Icon={EuroSymbolIcon} title={"Chiffre d'affaire"}
                                           value={statistics[statistics.length - 1].totalIncomes}
                                           difference={statistics[statistics.length - 1].totalIncomes - statistics[statistics.length - 2].totalIncomes}
                            />
                            <CardDashboard Icon={SellIcon} title={"Charges"}
                                           value={statistics[statistics.length - 1].totalExpenses}
                                           difference={statistics[statistics.length - 1].totalIncomes - statistics[statistics.length - 2].totalIncomes}
                            />

                            <CardDashboard Icon={ShowChartIcon} title={"Résultat"}
                                           value={statistics[statistics.length - 1].totalExpenses}
                                           difference={statistics[statistics.length - 1].totalIncomes - statistics[statistics.length - 2].totalIncomes}
                            />
                            <CardDashboard Icon={WalletIcon} title={"Portefeuille"}
                                           value={statistics[statistics.length - 1].totalExpenses}
                                           difference={statistics[statistics.length - 1].totalIncomes - statistics[statistics.length - 2].totalIncomes}
                            />
                        </>
                        :
                        <>
                            <CardDashboard Icon={EuroSymbolIcon} title={"Chiffre d'affaire"}
                                           value={statistics[statistics.length - 1].totalIncomes}
                                           difference={0}
                            />
                            <CardDashboard Icon={SellIcon} title={"Charges"}
                                           value={statistics[statistics.length - 1].totalExpenses}
                                           difference={0}
                            />

                            <CardDashboard Icon={ShowChartIcon} title={"Résultat"}
                                           value={statistics[statistics.length - 1].totalExpenses}
                                           difference={0}
                            />
                            <CardDashboard Icon={WalletIcon} title={"Portefeuille"}
                                           value={statistics[statistics.length - 1].totalExpenses}
                                           difference={0}
                            />
                        </>
                    }
                </>
                :
                <>
                    <CardDashboard Icon={SellIcon} title={"Chiffre d'affaire"}
                                   value={0}
                                   difference={0}
                    />
                    <CardDashboard Icon={SellIcon} title={"Charges"}
                                   value={0}
                                   difference={0}/>
                    <CardDashboard Icon={SellIcon} title={"Résultat"}
                                   value={0}
                                   difference={0}/>
                    <CardDashboard Icon={SellIcon} title={"Portefeuille"} value={0} difference={0}/>
                </>
            }
        </div>
    );
};

export default CardDashboardContainer;
