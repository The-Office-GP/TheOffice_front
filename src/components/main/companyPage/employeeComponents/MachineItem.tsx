import {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import {MachineShortType, MachineType} from "../../../../@types/MachineType";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {saveCompanyInfo} from "../../../../@scripts/main/components/companyPage/companyPageScript";
import {useParams} from "react-router";
import "../../../../@styles/main/components/companyPage/employeeConponentsStyles/notification.css";
import EmployeeCardButtons from "./EmployeeCardButtons";
import {CompanyDetailsType} from "../../../../@types/companyType";
import {UserContext} from "../../../../contexts/UserContext";
import {getUserInfo, saveUserInfo} from "../../../../utilis/storage";
import {UserType} from "../../../../@types/userType";
import {userInfo} from "node:os";

interface MachineItemProps {
    machine: MachineType;
    type: string;
    purchaseIsMake: boolean;
    setPurchaseIsMake: Dispatch<SetStateAction<boolean>>;
    onBuy: () => void;
}

const MachineItem: FC<MachineItemProps> = ({machine, type, purchaseIsMake, setPurchaseIsMake, onBuy}) => {
    const companyContext = useContext(CompanyContext);
    const params = useParams();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const addMachine = () => {
        if (companyContext.company.wallet >= machine.price) {
            if (!purchaseIsMake) {
                const id = Number(params.id);
                const company:CompanyDetailsType = {
                    ...companyContext.company,
                    wallet: companyContext.company.wallet - machine.price
                };

                companyContext.company.machinesInCompany.push({
                    id: 0,
                    machineId: machine.id,
                    companyId: id
                } as MachineShortType);

                saveCompanyInfo(id, company, companyContext.setCompany);
                setPurchaseIsMake(true);
                onBuy();

                const userInfo = getUserInfo()
                if(userInfo){
                    const parsedUserInfo = JSON.parse(userInfo)
                    saveUserInfo(
                        {
                            id: parsedUserInfo.id,
                            email: parsedUserInfo.email,
                            username: parsedUserInfo.username,
                            role: parsedUserInfo.role,
                            wallet: company.wallet,
                        } as UserType
                    )
                }
                setTimeout(() => {
                    setPurchaseIsMake(false);
                }, 1000);
            }
        } else {
            setErrorMessage("❌ Vous n'avez pas assez d'argent");
            setTimeout(() => setErrorMessage(null), 3000); // Cache le message après 3 secondes
        }
    };

    return (
        <div className="obtain-item-card">
            <img src={machine.image} alt="machine"/>
            <div className="info-container">
                <span>{machine.name}</span>
                <span className="job">{machine.productionQuality}</span>
                <span className="info">Prix : {machine.price}€</span>
                <span className="info">Coût d'entretien : {machine.maintenanceCost}€</span>
            </div>

            {type === "companyTeam" ? (
                <EmployeeCardButtons/>
            ) : (
                <button className="increase-button" onClick={addMachine}>Acheter</button>
            )}

            {errorMessage && <div className="notification">{errorMessage}</div>}
        </div>
    );
};

export default MachineItem;
