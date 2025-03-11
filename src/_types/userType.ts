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
    id_user: number,
    image: string,
}