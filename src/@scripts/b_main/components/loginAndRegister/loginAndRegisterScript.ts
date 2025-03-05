import {NavigateFunction} from "react-router";
import {Dispatch, SetStateAction} from "react";
import {postTheOfficeDb} from "../../../../api/theofficeApi";

export const loginCallApiForConnection = async (dispatch:any, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, navigate:NavigateFunction, data:any, setIsSubmitting: Dispatch<SetStateAction<boolean>> ) => {
    let response:any
    setIsSubmitting(true)

    try {
        response = await postTheOfficeDb('/auth/login', data);
        console.log(response);
        if (response.status === 200) {
            dispatch({type: 'LOGIN', payload: {token: response.data}})
            setTimeout(() => {
                navigate('/');
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