import {EmployeeType} from "./employeeType";
import {MachineShortType, MachineType} from "./MachineType";

export interface CompanyType {
    id: number;
    sector: string;
    name: string;
    creation_date: string;
    popularity: number;
    id_user: number;
    machines: null;
    employees: null;
    events: null;
}

export interface CompanyDetailsType {
    id: number;
    sector: string;
    name: string;
    popularity: number;
    idUser: number;
    local: LocalType;
    wallet: number;
    cycles: [];
    machines: MachineType[];
    employees: EmployeeType[];
    suppliers: [];
    events: [];
    stockMaterials: [];
    stockFinalMaterials: [];
    machinesInCompany: MachineShortType[];
}

export interface LocalType {
    id: number;
    level: string;
    size: number;
    rent: number;
    maxEmployees: number;
    maxMachines: number;
    pathBackgroundImage: string;
}