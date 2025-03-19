import {FC, useContext, useEffect, useState} from 'react';
import {Grid2} from "@mui/material";
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeItem from "../employeeComponents/EmployeeItem";
import {getTheOfficeDbUser, postTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";
import "../../../../@styles/main/components/companyPage/recruitmentBoard.css"
import {MachineType} from "../../../../@types/MachineType";
import companyPage from "../../../../pages/CompanyPage";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import MachineItem from "../employeeComponents/MachineItem";

const BuyMachineBoard: FC<{}> = ({}) => {
    const companyContext = useContext(CompanyContext)
    const [listMachineForBuy, setListMachineForBuy] = useState<MachineType[]>([])

    useEffect(() => {
        collectMachineForBuy()
    }, []);

    const collectMachineForBuy = async () => {
        try {
            const data = companyContext.company
            const response:any = await postTheOfficeDbUser(`/companies/buyMachine`,data,  getToken());
            setListMachineForBuy(response.data)
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };

    return (
        <section className={"office-background-section"}>
            <div className={"recruitment-card-header"}>
                <div className={"h3-description"}>
                    <h3>Achat</h3>
                    <img className={'recruitment-img'}
                         src={"/assets/Employees/employees-avatars/anneLise.png"}
                         alt={"recruitment-people"}/>
                    <span>Voici des machines que l'on pourrait acheter pour notre entreprise</span>
                </div>
            </div>
            <div className={"recruitment-card-display"}>
                {listMachineForBuy.map((machine, index) => (
                    <MachineItem key={index} machine={machine} type={"recruitment"}/>))}
            </div>

        </section>
    );
};

export default BuyMachineBoard;
