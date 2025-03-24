import {EmployeeType} from "./employeeType";
import {MachineShortType, MachineType} from "./MachineType";
import {StockFinalMaterialsType, StockMaterialsType} from "./stockMaterialsType";

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
    stockMaterials: null;
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
    stockMaterials: StockMaterialsType;
    stockFinalMaterials: StockFinalMaterialsType[];
    machinesInCompany: MachineShortType[];
    statistics: Statistic[]
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

export interface Statistic {
    id: number;
    year: number;
    month: number;
    product1LowQtySell: number;
    product1MidQtySell: number;
    product1HighQtySell: number;
    product2LowQtySell: number;
    product2MidQtySell: number;
    product2HighQtySell: number;
    product3LowQtySell: number;
    product3MidQtySell: number;
    product3HighQtySell: number;
    product1LowQtyProd: number;
    product1MidQtyProd: number;
    product1HighQtyProd: number;
    product2LowQtyProd: number;
    product2MidQtyProd: number;
    product2HighQtyProd: number;
    product3LowQtyProd: number;
    product3MidQtyProd: number;
    product3HighQtyProd: number;
    product4LowQtyProd: number;
    product4MidQtyProd: number;
    product4HighQtyProd: number;
    materialLowQty: number;
    materialMidQty: number;
    materialHighQty: number;
    totalIncomes: number;
    totalExpenses: number;
    popularity: number;
    idCompany: number;
}
