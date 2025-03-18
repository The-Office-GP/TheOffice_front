import {Dispatch, SetStateAction} from "react";

//Rends visible ou non la dropdown liste
export const handleDropdownButton = (elementsAreVisible:boolean, setElementsAreVisible:Dispatch<SetStateAction<boolean>>) => {
    setElementsAreVisible(!elementsAreVisible)
}