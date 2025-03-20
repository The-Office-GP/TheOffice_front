import axios, {AxiosResponse} from "axios";
import {getToken} from "../utilis/storage";

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;

axios.interceptors.response.use(
    (response:AxiosResponse) => {
        return response;
    },
    (error:any) => {

        return {
            status: error.response.status,
            response: error.response.data
        };
    }
);

export const getTheOfficeDb = (url: string, config?: {}) => {
    return axios.get('http://localhost:8080' + url, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })
}

export const getTheOfficeDbUser = (url: string,token:string|null, config?: {}) => {
    config = {headers: {Authorization: `Bearer ${token}`}}
    return axios.get('http://localhost:8080' + url, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })
}

export const postTheOfficeDb = (url: string, data: any, config?: {}) => {
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    return axios.post('http://localhost:8080' + url, jsonData, config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const postTheOfficeDbUser = (url: string, data: any,token: string | null, config?: {}) => {
    config = {headers: {Authorization: `Bearer ${token}`}}
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    return axios.post('http://localhost:8080' + url, jsonData, config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const putTheOfficeDbUser = (url: string, data: any, token: string | null, config?: {}) => {
    config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',  // Assurez-vous que Content-Type est défini sur application/json
            'Accept': 'application/json'  // Assurez-vous que Accept est défini sur application/json
        }
    };
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    return axios.put('http://localhost:8080' + url, jsonData, config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const putTheOfficeDb = (url: string, data: any, config?: {}) => {
    return axios.put('http://localhost:8080' + url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const deleteTheOfficeDb = (url: string, config?: {}) => {
    return axios.delete('http://localhost:8080' + url, config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject(error);
        })
}