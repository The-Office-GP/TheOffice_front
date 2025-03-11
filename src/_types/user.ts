export interface User {
    id: number;
    email: string;
    username: string;
    role: string;
    wallet: number;
}

export interface CompanyCreated {
    sector: string,
    name: string,
    creation_date: string,
    id_user: number,
    image: string,
}