import {SectorType} from "../@types/sectorType";

export const sectorCompanyData: string[] = ["carpentry", "creamery", "quarry"];

export const createCompanyData: SectorType[] = [
    {
        sectorName: "carpentry",
        src: "/images/sectorImages/Business-model-1.png",
        alt: "image model industriel 1",
        title: "Menuiserie",
    },
    {
        sectorName: "creamery",
        src: "/images/sectorImages/Business-model-2.png",
        alt: "image model industriel 2",
        title: "Laiterie",
    },
    {
        sectorName: "quarry",
        src: "/images/sectorImages/Business-model-3.png",
        alt: "image model industriel 3",
        title: "Carrière",
    },
]

export const defaultValueCompany = {
    sector: "",
    name: "",
    creation_date: "2024-10-10",
    popularity: 0,
    id_user: 0,
    image: "path",
}