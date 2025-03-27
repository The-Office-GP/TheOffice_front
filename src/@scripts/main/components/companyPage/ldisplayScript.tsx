import {CompanyDetailsType} from "../../../../@types/companyType";
import {Supplier} from "../../../../@types/supplierType";

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
                    return "Marbre"
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


export const supplierInformation = (company: CompanyDetailsType) => {
    if (company.sector === "carpentry") {
        const woodSuppliers: Supplier[] = [
            {
                name: "Bois son",
                furniture: "Bois de faible facture",
                description: "On est là",
                priceIndicator: "100€",
                bonus1: "Livraison gratuite",
                bonus2: "Fabrication artisanale"
            },
            {
                name: "Les six tronc",
                furniture: "Bois moyen",
                description: "Une collection de bois acidulé",
                priceIndicator: "500€",
                bonus1: "Teinture sur demande",
                bonus2: "Garantie 5 ans"
            },
            {
                name: "Les Hauts Bois",
                furniture: "Bois certifié",
                description: "Un bois qui fait du bruit",
                priceIndicator: "1000€",
                bonus1: "Recyclage des matériaux",
                bonus2: "Éco-responsable"
            }
        ];
        return woodSuppliers

    } else if (company.sector === "creamery") {
        const dairySuppliers: Supplier[] = [
            {
                name: "Crème de la Crème",
                furniture: "Des vaches",
                description: "On essaie",
                priceIndicator: "100€",
                bonus1: "Lait bio",
                bonus2: "Fromage local"
            },
            {
                name: "Lait'Rien",
                furniture: "Bonnes vaches",
                description: "Un fournisseur de vaches",
                priceIndicator: "500€",
                bonus1: "Fromage frais",
                bonus2: "Livraison express"
            },
            {
                name: "Hache Lait",
                furniture: "Les meilleurs vache du pays",
                description: "Nos vaches ne fournisse pas du lait mais un extrait de paradis",
                priceIndicator: "1000€",
                bonus1: "Fromages affinés",
                bonus2: "Service personnalisé"
            }
        ];
        return dairySuppliers

    } else if (company.sector === "quarry") {
        const careerSuppliers: Supplier[] = [
            {
                name: "Pierre luis",
                furniture: "Pierre",
                description: "Chez nous que des Pierres",
                priceIndicator: "100€",
                bonus1: "Pierre qui roule",
                bonus2: "Pierre de toute forme"
            },
            {
                name: "En Ciment",
                furniture: "Bonne pierre",
                description: "Issus de carrières solides.",
                priceIndicator: "500€",
                bonus1: "Pierre moyenne",
                bonus2: "Facile à assembler"
            },
            {
                name: "Roche & Rôles",
                furniture: "Roche & Roles",
                description: "Pour une carrière en béton",
                priceIndicator: "1000€",
                bonus1: "Haute résistance",
                bonus2: "Materiaux noble"
            }
        ];

        return careerSuppliers
    }
}