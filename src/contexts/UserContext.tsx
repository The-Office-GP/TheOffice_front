import {createContext, Dispatch, SetStateAction} from "react";
import {User} from "../_types/user";


export interface UserContextProps {
    userInfo: User;
    setUserInfo: Dispatch<SetStateAction<User>>;
}

const defaultContextValue: UserContextProps = {
    userInfo: {email:"", username:"", roles:""},
    setUserInfo: () => {
    },
}

export const UserContext = createContext<UserContextProps>(defaultContextValue);