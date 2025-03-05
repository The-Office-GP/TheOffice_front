import {NavigateFunction, useNavigate} from "react-router";
import {Dispatch, SetStateAction} from "react";

export const loginCallApiForConnection = (dispatch:any, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, navigate:NavigateFunction, data:any) => {
    let response:any

    try {
        //response = await post('/auth/login', data);
        response = {
            status: 200,
            data: "tokenvalidforuser"
        };
        console.log(response);
        if (response.status === 200) {
            dispatch({type: 'LOGIN', payload: {token: response.data}})
            setTimeout(() => {
                navigate('/');
            }, 50);
        } else {
            console.error("test");
            setErrorMessages({
                password: "email ou mot de passe incorrect",
            });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    } finally {
        console.log("end call")
    }
}