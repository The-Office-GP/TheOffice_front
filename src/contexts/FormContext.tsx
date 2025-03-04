import {createContext} from "react";
import React from "react";


interface FormContextProps {
    registerIsVisible: boolean;
    setRegisterIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: FormContextProps = {
    registerIsVisible: false,
    setRegisterIsVisible: () => {
    },
};

export const FormContext = createContext<FormContextProps>(defaultContextValue);