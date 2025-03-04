import {createContext, Dispatch, SetStateAction} from "react";
import React from "react";


interface FormContextProps {
    registerIsVisible: boolean;
    setRegisterIsVisible: Dispatch<SetStateAction<boolean>>;
}

const defaultContextValue: FormContextProps = {
    registerIsVisible: false,
    setRegisterIsVisible: () => {
    },
};

export const FormContext = createContext<FormContextProps>(defaultContextValue);