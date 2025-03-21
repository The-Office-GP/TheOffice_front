import {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import "../../../../@styles/main/components/companyPage/employeeBoard.css"
import PeopleIcon from "@mui/icons-material/People";
import {CompanyContext} from "../../../../contexts/CompanyContext";
import ExitButton from "../../../share/ExitButton";

import {MachineShortType, MachineType} from "../../../../@types/MachineType";
import MachineItem2 from "../employeeComponents/MachineItem2";
import MachineLevelButtons from "../employeeComponents/MachineLevelButtons";
import BuyMachineBoard from "./BuyMachineBoard";

interface FilterType {
    level: string;
}

const MachineBoard: FC<{ setPage: Dispatch<SetStateAction<number>> }> = ({setPage}) => {
    const companyContext = useContext(CompanyContext)
    const [machineInCompanyList, setMachineInCompanyList] = useState<MachineShortType[]>(companyContext.company.machinesInCompany)
    const [stateBoard, setStateBoard] = useState<boolean>(false)
    const [filter, setFilter] = useState<FilterType>({level:"ALL"} as FilterType)

    useEffect(() => {
        filterListMachine()
    }, [filter]);

    const filterListMachine = () => {
        if(filter.level === "ALL"){
            setMachineInCompanyList(companyContext.company.machinesInCompany)
        }else {
            setMachineInCompanyList(companyContext.company.machinesInCompany.filter((machine:MachineShortType) => companyContext.company.machines[machine.machineId].productionQuality === filter.level))
        }
    }

    return (
        <section className={"office-background-section"} id={"list-section"}>
            {!stateBoard ?
                <div className={"display-container"}>
                    <ExitButton setPage={setPage}/>
                    <section className={"item-cards-container"}>
                        <div className={"icon-title"}>
                            <PeopleIcon className={"menu-Icon"}/>
                            <h3>Mes machines</h3>
                        </div>
                        <div className={"item-list"}>
                            {companyContext.company.machines.length === 0 ?
                                <h4>L'entreprise ne possède aucune machine</h4>
                            :
                                <>
                                    {machineInCompanyList.map((machineInCompany:MachineShortType) => (<MachineItem2 machine={companyContext.company.machines[machineInCompany.machineId-1]}/>))}
                                </>
                            }
                        </div>
                    </section>
                    <aside className={"employees-aside"}>
                        <MachineLevelButtons setFilter={setFilter}/>
                        <button className={"recuite-button"} onClick={() => setStateBoard(true)}>Acheter</button>
                    </aside>
                </div>
                :
                <div className={"display-container2"}>
                    <ExitButton setPage={setPage}/>
                    <BuyMachineBoard/>
                </div>
            }
        </section>
    );
};

export default MachineBoard;
