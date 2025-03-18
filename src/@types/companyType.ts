import {EmployeeType} from "./employeeType";

export interface CompanyType {
    id: number;
    sector: string;
    name: string;
    creation_date: string;
    id_user: number;
    machines: null;
    employees: null;
    events: null;
}

export interface CompanyDetailsType {
    sector: string;
    name: string;
    idUser: number;
    local: LocalType;
    wallet: number;
    cycles: [];
    machines: [];
    employees: EmployeeType[];
    suppliers: [];
    events: [];
    stockMaterials: [];
    stockFinalMaterials: [];
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