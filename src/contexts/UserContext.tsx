import {createContext, Dispatch, SetStateAction} from "react";
import {UserType} from "../@types/userType";


export interface UserContextProps {
    userInfo: UserType;
    setUserInfo: Dispatch<SetStateAction<UserType>>;
}

const defaultContextValue: UserContextProps = {
    userInfo: {id:0, email:"", username:"", role:"", wallet:0},
    setUserInfo: () => {
    },
}

export const UserContext = createContext<UserContextProps>(defaultContextValue);