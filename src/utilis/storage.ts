import {User} from "../_types/user";

export const saveToken = (token: string) => {
    localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
    return localStorage.getItem('token');
};

export const removeToken = () => {
    localStorage.removeItem('token');
};

export const saveUserInfo = (user:User) => {
    const userStringify:string = JSON.stringify(user)
    localStorage.setItem('user', userStringify);
};

export const getUserInfo = (): string | null => {
    return localStorage.getItem('user');
};

export const removeUserInfo = () => {
    localStorage.removeItem('user');
};