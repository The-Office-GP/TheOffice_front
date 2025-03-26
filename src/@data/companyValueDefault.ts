import {CompanyDetailsType, CycleType, LocalType, Statistic} from "../@types/companyType";
import {MachineType} from "../@types/MachineType";
import {StockMaterialsType} from "../@types/stockMaterialsType";

export const localTypeDefault: LocalType = {
    id: 1,
    level: '1',
    size: 1,
    rent: 1,
    maxEmployees: 1,
    maxMachines: 1,
    pathBackgroundImage: "path",
}

export const stockMaterialDefault: StockMaterialsType = {
    id: 1,
    name: "Matière première",
    quantityLow: 0,
    quantityMid: 0,
    quantityHigh: 0,
}

export const machineTypeDefault: MachineType = {
    id: 1,
    name: "Petite machine Bois",
    productionQuality: "MEDIOCRE",
    price: 50000,
    maintenanceCost: 12000,
    image: "image.png"
}

export const cycleTypeDefault: CycleType = {
    id: 0,
    step: 0,
    productionSpeed: 0,
    priorityProduction: 0,
    priorityMarketing: 0,
    countGoodSell: 0,
    countBadSell: 0,
    trend: "name",
    companyId: 0,
}

export const companyDetailsDefault: CompanyDetailsType = {
    id: 1,
    sector: "Default",
    name: "Name",
    popularity: 0,
    userId: 0,
    local: localTypeDefault,
    wallet: 0,
    cycle: cycleTypeDefault,
    machines: [],
    employees: [],
    suppliers: [],
    events: [],
    stockMaterial: stockMaterialDefault,
    stockFinalMaterials: [],
    machinesInCompany: [],
    statistic: []
}