import {CompanyDetailsType} from "../../../../@types/companyType";

export const nameOfProducts = (company:CompanyDetailsType, product:string) => {
    if(company.sector === "carpentry") {
        switch (product) {
            case "Product1":
                return "Table"
            case "Product2":
                return "Chaise"
            case "Product3":
                return "Cabane"
            case "Product4":
                return "Palette"
        }
    }else if(company.sector === "creamery") {
        switch (product) {
            case "Product1":
                return "Lait"
            case "Product2":
                return "Fromage"
            case "Product3":
                return "Beurre"
            case "Product4":
                return "Crême"
        }
    }else if(company.sector === "quarry") {
            switch (product) {
                case "Product1":
                    return "Tuile"
                case "Product2":
                    return "Ciment"
                case "Product3":
                    return "Carreaux"
                case "Product4":
                    return "Ceramique"
            }
        }
}

export const nameOfMaterial = (company: CompanyDetailsType) => {
    if (company.sector === "carpentry") {
        return "Bois"
    } else if (company.sector === "creamery") {
        return "Vache"
    } else if (company.sector === "quarry") {
        return "Pierre"
    }
}