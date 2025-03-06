import {NavigateFunction} from "react-router";
import {Dispatch, SetStateAction} from "react";
import {postTheOfficeDb} from "../../../../api/theofficeApi";
import {saveUserInfo} from "../../../../utilis/storage";
import {User} from "../../../../_types/user";

//Permet à l'utilisateur de se connecter
export const loginCallApiForConnection = async (dispatch:any, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, navigate:NavigateFunction, data:any, setIsSubmitting: Dispatch<SetStateAction<boolean>> ) => {
    let response:any
    setIsSubmitting(true)

    try {
        response = await postTheOfficeDb('/auth/login', data);
        if (response.status === 200) {
            dispatch({type: 'LOGIN', payload: {token: response.data}})
            const user:User = {username: "Testeur"}
            saveUserInfo(user)
            setTimeout(() => {
                navigate('/createCompany');
            }, 50);
        } else {
            setErrorMessages({
                loginError: "Veuillez vérifier votre nom de compte et votre mot de passe, puis réessayer.",
            });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    } finally {
        setIsSubmitting(false);
    }
}

//Permet à l'utilisateur de s'inscrire
export const subscribeCallApi = async (setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, navigate:NavigateFunction, data:any, setIsSubmitting: Dispatch<SetStateAction<boolean>>, setRegisterIsMake: Dispatch<SetStateAction<boolean>> ) => {
    let response: any
    setIsSubmitting(true)

    try {
        response = await postTheOfficeDb('/auth/register', data);
        if (response.status === 200) {
            setRegisterIsMake(true);
        } else {
            if ((response.response === "Error: Email is already in use!")) {
                setErrorMessages({
                    email: "L'email est déja utilisé",
                });
            } else if (response.response.password === "Mot de passe invalide") {
                setErrorMessages({
                    passwordConfirm: "Le mot de passe doit avoir : une majsucule, un chiffre, et un caractère spéciale",
                });
            }
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    } finally {
        setIsSubmitting(false);
    }
}


//Vérifie que le nom de l'utilisateur n'est pas nul ou juste un espace
export const usernameIsValidate = (username:string, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>) => {
    if (username.length === 0 || username === " ") {
        setErrorMessages({
            username: "Le nom d'utilisateur n'est pas valide",
        });
        return false;
    }
    else{
        return true;
    }
}

//vérifie que le mail est bien au format mail
export const emailIsValidate = (email:string, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        setErrorMessages({
            email: "L'email n'est pas valide",
        });
        return false;
    }
    else {
        return true;
    }
}