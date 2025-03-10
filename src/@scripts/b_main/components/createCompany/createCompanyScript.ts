import {Dispatch, SetStateAction} from "react";
import {postTheOfficeDb} from "../../../../api/theofficeApi";
import {getToken} from "../../../../utilis/storage";



export const createCompany = async (setIsSubmitting:Dispatch<SetStateAction<boolean>>, data:any,setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>> ) => {
    let response: any
    setIsSubmitting(true)

    try {
        console.log(data)
        response = await postTheOfficeDb('/companies/create', data, {headers: {Authorization: `Bearer ${getToken()}`}});
        if (response.status === 200) {
            console.log("Successfully created companie")
        } else {
            setErrorMessages({
                email: "L'email est déja utilisé",
            });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    } finally {
        setIsSubmitting(false);
    }
}

export const companyNameIsValidate = (name: string, setErrorMessages: Dispatch<SetStateAction<{[key: string]: string }>>) => {
    const nameRegex = /^[A-Za-z]([A-Za-z' ]*)$/;
    console.log(!nameRegex.test(name));
    if (!nameRegex.test(name)) {
        setErrorMessages({
            companyName: "Le nom n'est pas valide: le premier caractère doit être une lettre et seuls les apostrophe et espace sont autorisé."
        });
        return false;
    } else {
        return true;
    }
}