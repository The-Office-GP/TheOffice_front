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
    wallet: number;
    cycles: [];
    machines: [];
    employees: [];
    suppliers: [];
    events: [];
    stockMaterials: [];
    stockFinalMaterials: [];
    local: localType;
}

export interface localType {
    id: number;
    level: string;
    size: number;
    rent: number;
    maxEmployees: number;
    maxMachines: number;
    background_image: string;
}