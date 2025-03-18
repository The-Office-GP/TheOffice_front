import {CompanyDetailsType, LocalType} from "../@types/companyType";

export const localTypeDefault: LocalType = {
    id: 1,
    level: '1',
    size: 1,
    rent: 1,
    maxEmployees: 1,
    maxMachines: 1,
    pathBackgroundImage: "path",
}

export const companyDetailsDefault: CompanyDetailsType = {
    sector: "Default",
    name: "Name",
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
}