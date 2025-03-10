import {Sector} from "../_types/sector";

export const sectorCompanyData: string[] = ["carpentry", "creamery", "quarry"];

export const createCompanyData: Sector[] = [
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
    id_user: 0,
    image: "path",
}