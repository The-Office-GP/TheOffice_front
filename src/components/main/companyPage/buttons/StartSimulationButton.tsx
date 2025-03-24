import {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import "../../../../@styles/main/components/global/buttons/StartSimulationButton.css"
import {putTheOfficeDbUser} from "../../../../api/theofficeApi";
import {CompanyDetailsType, LocalType, Statistic} from "../../../../@types/companyType";
import {MachineShortType, MachineType} from "../../../../@types/MachineType";
import {EmployeeType} from "../../../../@types/employeeType";
import {StockFinalMaterialsType, StockMaterialsType} from "../../../../@types/stockMaterialsType";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import {UserContext} from "../../../../contexts/UserContext";
import companyPage from "../../../../pages/CompanyPage";



const StartSimulationButton: FC<{ setPage: Dispatch<SetStateAction<number>>}> = ({setPage}) => {
    return (
        <>
            <button className={"start-simulation-button"} onClick={() => setPage(6)}>Lancer le cicle</button>
        </>
    )
}
export default StartSimulationButton;