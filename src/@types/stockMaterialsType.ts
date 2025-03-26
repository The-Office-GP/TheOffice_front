export interface StockMaterialsType {
    "id": number,
    "name": string,
    "quantityLow" : number,
    "quantityMid" : number,
    "quantityHigh" : number,
}

export interface StockFinalMaterialsType {
    id: number,
    name: string,
    quantityLow: number,
    quantityMid: number,
    quantityHigh: number,
    proportionProduct: number,
    quantityToProduct: number,
    monthProduction: number,
    sell: number,
    monthSell: number,
    companyId: number
}