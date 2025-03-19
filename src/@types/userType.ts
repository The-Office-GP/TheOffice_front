export interface UserType {
    id: number;
    email: string;
    username: string;
    role: string;
    wallet: number;
}

export interface CompanyCreatedType {
    sector: string,
    name: string,
    creation_date: string,
    popularity: number
    id_user: number,
    image: string,
}