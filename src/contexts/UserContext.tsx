import {createContext, Dispatch, SetStateAction} from "react";
import {User} from "../_types/user";


export interface UserContextProps {
    userInfo: User;
    setUserInfo: Dispatch<SetStateAction<User>>;
}

const defaultContextValue: UserContextProps = {
    userInfo: {id:0, email:"", username:"", role:"", wallet:0},
    setUserInfo: () => {
    },
}

export const UserContext = createContext<UserContextProps>(defaultContextValue);