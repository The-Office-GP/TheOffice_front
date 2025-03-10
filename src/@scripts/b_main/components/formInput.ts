import {ChangeEvent, Dispatch, SetStateAction} from "react";

export const inputChange = (setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, setInput:Dispatch<SetStateAction<any>>, input: any, e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessages({});
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    });
}