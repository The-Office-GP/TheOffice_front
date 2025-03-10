import {ChangeEvent, Dispatch, SetStateAction} from "react";

//Récupère les informations d'un input pour les intégrer dans l'objet correspondant à la bonne clé
export const inputChange = (setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, setInput:Dispatch<SetStateAction<any>>, input: any, e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessages({});
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    });
}