import {ChangeEvent, FormEvent, useContext} from "react";
import {FC, useState} from 'react';
import '../../../@styles/main/components/loginAndRegister/form.css'
import {useAuth} from "../../../contexts/AuthContext";
import {LoginFormInput} from "../../../@types/loginAndRegister";
import {submitLogin} from "../../../@scripts/main/components/loginAndRegister/loginAndRegisterScript";
import {useNavigate} from "react-router";
import {UserContext} from "../../../contexts/UserContext";
import {inputChange} from "../../../@scripts/main/components/formInput";

//Formulaire de connexion
const LoginForm: FC = () => {
    const {dispatch} = useAuth()
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const userContext = useContext(UserContext)
    const navigate = useNavigate()

    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
    const [loginInput, setLoginInput] = useState<LoginFormInput>({
        email: '',
        password: '',
    });

    //Récupère les valeurs de l'input à chaque changement
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        inputChange(setErrorMessages, setLoginInput, loginInput, e)
    };

    //envoie les données du formulaire pour se connecter
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        await submitLogin(e, setErrorMessages, loginInput, setIsSubmitting, dispatch, userContext, navigate)
    };

    return (
        <form className={"subscribe-form"} onSubmit={handleSubmit}>
            <div className={"title"}>
                <h2>Connexion</h2>
                {errorMessages.loginError && <span className="error">{errorMessages.loginError}</span>}
                {errorMessages.email && <span className="error">{errorMessages.email}</span>}
            </div>

            <label className={"form-label"}>Email</label>
            <input name={"email"} type={"text"} id={errorMessages.loginError || errorMessages.email ? "input-form-error" : "input-form"} value={loginInput.email} onChange={handleInputChange} />

            <label className={"form-label"}>Mot de passe</label>
            <input name={"password"} type={"password"} id={errorMessages.loginError ? "input-form-error" : "input-form"} value={loginInput.password} onChange={handleInputChange}/>

            {!isSubmitting ? (
                    <button type={"submit"} className={"subscribe-button"}>Se connecter</button>
            )
                : (
                    <div className="loadingtext">
                        <p>Vérification</p>
                    </div>
                )}
        </form>
    );
};

export default LoginForm;
