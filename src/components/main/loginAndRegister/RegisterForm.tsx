import {ChangeEvent, FC, FormEvent, useContext, useState} from 'react';
import '../../../@styles/b_main/components/loginAndRegister/form.css'
import SwitchForm from "./SwitchForm";
import {RegisterFormInput} from "../../../_types/loginAndRegister";
import {
    emailIsValidate, loginCallApiForConnection,
    subscribeCallApi,
    usernameIsValidate
} from "../../../@scripts/b_main/components/loginAndRegister/loginAndRegisterScript";
import {useNavigate} from "react-router";
import {useAuth} from "../../../contexts/AuthContext";
import {FormContext} from "../../../contexts/FormContext";

//Formulaire d'inscription qui permet à la fin soit de se connecter soit de retourner à l'accueil
const RegisterForm: FC = () => {
    const {dispatch} = useAuth()
    const navigate = useNavigate()
    const formContext = useContext(FormContext)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
    const [registerIsMake, setRegisterIsMake] = useState<boolean>(false);
    const [dataForConnexion, setDataForConnexion] = useState({})
    const [registerInput, setRegisterInput] = useState<RegisterFormInput>({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    //récupère données des inputs à chaque changement
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorMessages({});
        setRegisterInput({
            ...registerInput,
            [e.target.name]: e.target.value,
        });
    };

    //envoie les données à la base de données pour s'inscrire après avoir vérifié leur validité
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessages({});

        if(!usernameIsValidate(registerInput.username, setErrorMessages) || !emailIsValidate(registerInput.email, setErrorMessages)){
            return
        }

        setIsSubmitting(true);

        const data = {
            email: registerInput.email,
            username: registerInput.username,
            password: registerInput.password,
            role: "USER",
            wallet: 1
        };

        await subscribeCallApi(setErrorMessages, navigate, data, setIsSubmitting, setRegisterIsMake)

        setDataForConnexion({
            email: registerInput.email,
            password: registerInput.password,
        })

    };

    //connecte l'utilisateur
    const handleSubmitForConnexion = async () => {
        await loginCallApiForConnection(dispatch, setErrorMessages, navigate, dataForConnexion, setIsSubmitting)
    };

    //renvoie sur la page d'accueil
    const handleBack = () => {
        formContext.setRegisterIsVisible(!formContext.registerIsVisible)
    }

    return (
        <>
            {registerIsMake ? (
                <div className={"subscribe-form"}>
                    <h2>Enregistrement effectué !</h2>
                    {!isSubmitting ? (
                            <button type={"button"} className={"subscribe-button"} onClick={handleSubmitForConnexion}>Connexion</button>
                        )
                        : (
                            <div className="loadingtext">
                                <p>Vérification</p>
                            </div>
                        )}
                    <button type={"button"} className={"subscribe-button"} onClick={handleBack}>Retour</button>
                </div>
            ) : (
                <form className={"subscribe-form"} onSubmit={handleSubmit}>
                    <SwitchForm/>
                    <div className={"title"}>
                        <h2>Inscription</h2>
                        {errorMessages.username && <div className="error">{errorMessages.username}</div>}
                        {errorMessages.email && <div className="error">{errorMessages.email}</div>}
                        {errorMessages.password && <div className="error">{errorMessages.password}</div>}
                    </div>

                    <label className={"form-label"}>Nom d'utilisateur</label>
                    <input name={"username"} type={"text"}
                           id={errorMessages.username ? "input-form-error" : "input-form"}
                           value={registerInput.username} onChange={handleInputChange}/>

                    <label className={"form-label"}>Email</label>
                    <input name={"email"} type={"text"} id={errorMessages.email ? "input-form-error" : "input-form"}
                           value={registerInput.email} onChange={handleInputChange}/>

                    <label className={"form-label"}>Mot de passe</label>
                    <input name={"password"} type={"password"}
                           id={errorMessages.password ? "input-form-error" : "input-form"}
                           value={registerInput.password} onChange={handleInputChange}/>

                    <label className={"form-label"}>Confirmer le mot de passe</label>
                    <input name={"passwordConfirmation"} type={"password"}
                           id={errorMessages.password ? "input-form-error" : "input-form"}
                           value={registerInput.passwordConfirmation} onChange={handleInputChange}/>

                    {!isSubmitting ? (
                            <button type={"submit"} className={"subscribe-button"}>S'inscrire</button>
                        )
                        : (
                            <div className="loadingtext">
                                <p>Vérification</p>
                            </div>
                        )}
                </form>
            )}
        </>

    );
};

export default RegisterForm;
