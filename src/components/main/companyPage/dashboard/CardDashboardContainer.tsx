import {FC} from 'react';
import CardDashboard from "./CardDashboard";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import SellIcon from "@mui/icons-material/Sell";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import WalletIcon from "@mui/icons-material/Wallet";
import {CompanyDetailsType, Statistic} from "../../../../@types/companyType";

const CardDashboardContainer: FC<{company:CompanyDetailsType}> = ({company}) => {
    return (
        <div className={"card-dashboard-container"}>
            {company.statistics.length > 0 ?
                <>
                    {company.statistics.length > 1 ?
                        <>
                            <CardDashboard Icon={EuroSymbolIcon} title={"Chiffre d'affaire"}
                                           value={company.statistics[company.statistics.length - 1].totalIncomes}
                                           difference={company.statistics[company.statistics.length - 1].totalIncomes - company.statistics[company.statistics.length - 2].totalIncomes}
                            />
                            <CardDashboard Icon={SellIcon} title={"Charges"}
                                           value={company.statistics[company.statistics.length - 1].totalExpenses}
                                           difference={company.statistics[company.statistics.length - 1].totalIncomes - company.statistics[company.statistics.length - 2].totalIncomes}
                            />

                            <CardDashboard Icon={ShowChartIcon} title={"Résultat"}
                                           value={company.statistics[company.statistics.length - 1].totalIncomes - company.statistics[company.statistics.length - 1].totalExpenses}
                                           difference={company.statistics[company.statistics.length - 1].totalIncomes - company.statistics[company.statistics.length - 2].totalIncomes}
                            />
                            <CardDashboard Icon={WalletIcon} title={"Portefeuille"}
                                           value={company.wallet}
                                           difference={0}
                            />
                        </>
                        :
                        <>
                            <CardDashboard Icon={EuroSymbolIcon} title={"Chiffre d'affaire"}
                                           value={company.statistics[company.statistics.length - 1].totalIncomes}
                                           difference={0}
                            />
                            <CardDashboard Icon={SellIcon} title={"Charges"}
                                           value={company.statistics[company.statistics.length - 1].totalExpenses}
                                           difference={0}
                            />

                            <CardDashboard Icon={ShowChartIcon} title={"Résultat"}
                                           value={company.statistics[company.statistics.length - 1].totalIncomes - company.statistics[company.statistics.length - 1].totalExpenses}
                                           difference={0}
                            />
                            <CardDashboard Icon={WalletIcon} title={"Portefeuille"}
                                           value={company.wallet}
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
