import {FC, useContext, useEffect, useState} from 'react';
import {Grid2} from "@mui/material";
import {EmployeeType} from "../../../../@types/employeeType";
import EmployeeItem from "../employeeComponents/EmployeeItem";
import {getTheOfficeDbUser, postTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";
import "../../../../@styles/main/components/companyPage/recruitmentBoard.css"
import {MachineShortType, MachineType} from "../../../../@types/MachineType";
import companyPage from "../../../../pages/CompanyPage";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import MachineItem from "../employeeComponents/MachineItem";
import {CompanyDetailsType} from "../../../../@types/companyType";

const BuyMachineBoard: FC<{}> = ({}) => {
    const companyContext = useContext(CompanyContext)
    const [listMachineForBuy, setListMachineForBuy] = useState<MachineType[]>([])
    const [purchaseIsMake, setPurchaseIsMake] = useState<boolean>(false)
    const limitMachine = companyContext.company.local.maxMachines;
    const [showBuyError, setShowBuyError] = useState(false);

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

    const convertToMachineShort = (machine: MachineType, companyId: number): MachineShortType => {
        return {
            id: machine.id,
            machineId: machine.id,  // Utilisation du même id
            companyId: companyId,
        };
    };

    const handleBuyMachine = (machine: MachineType) => {
        const currentMachineCount = companyContext.company.machinesInCompany.length;

        if (currentMachineCount > limitMachine) {
            setShowBuyError(true);
            setTimeout(() => {
                setShowBuyError(false);
            }, 3000);
            return;
        }

        const machineShort = convertToMachineShort(machine, companyContext.company.id);
        companyContext.company.machinesInCompany.push(machineShort);
        companyContext.setCompany({...companyContext.company});
    };


    return (
        <>
            <div className={"recruitment-card-header"}>
                <h3>Achat</h3>
                <div className={"div-assistante"}>
                    <img className={'recruitment-img'}
                         src={"/assets/Employees/employees-avatars/anneLise.png"}
                         alt={"recruitment-people"}/>
                    {purchaseIsMake ?
                        <span>L'achat a été effectué !</span>
                    :
                        <span>Voici des machines que l'on pourrait acheter pour notre entreprise</span>
                    }
                </div>
            </div>
            <div className={"recruitment-card-display2"}>
                {listMachineForBuy.map((machine, index) => (
                    <MachineItem key={index} machine={machine} type={"recruitment"} purchaseIsMake={purchaseIsMake} setPurchaseIsMake={setPurchaseIsMake} onBuy={()=> handleBuyMachine(machine)}/>))}
            </div>
            {/* Bulle de notification */}
            {showBuyError && (
                <div className="recruitment-error-bubble">
                    <p>Vous avez atteint la limite de machines ! Agrandissez votre local pour en acheter plus.</p>
                </div>
            )}
        </>
    );
};

export default BuyMachineBoard;
