export interface MachineType {
    "id": number,
    "name": string,
    "productionQuality": string,
    "price": number,
    "maintenanceCost": number,
    "image": string
}

export interface MachineShortType {
    "id": number,
    "machineId": number,
    "companyId": number
}
