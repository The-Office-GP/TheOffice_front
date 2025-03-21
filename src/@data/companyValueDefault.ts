import {CompanyDetailsType, LocalType} from "../@types/companyType";
import {MachineType} from "../@types/MachineType";

export const localTypeDefault: LocalType = {
    id: 1,
    level: '1',
    size: 1,
    rent: 1,
    maxEmployees: 1,
    maxMachines: 1,
    pathBackgroundImage: "path",
}

export const machineTypeDefault: MachineType = {
    id: 1,
    name: "Petite machine Bois",
    productionQuality: "MEDIOCRE",
    price: 50000,
    maintenanceCost: 12000,
    image: "image.png"
}

export const companyDetailsDefault: CompanyDetailsType = {
    id: 1,
    sector: "Default",
    name: "Name",
    popularity: 0,
    idUser: 0,
    local: localTypeDefault,
    wallet: 0,
    cycles: [],
    machines: [],
    employees: [],
    suppliers: [],
    events: [],
    stockMaterials: [],
    stockFinalMaterials: [],
    machinesInCompany: [],
}