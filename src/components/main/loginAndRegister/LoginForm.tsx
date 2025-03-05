import {ChangeEvent, FormEvent} from "react";
import {FC, useState} from 'react';
import '../../../@styles/b_main/components/loginAndRegister/form.css'
import SwitchForm from "./SwitchForm";
import {useAuth} from "../../../contexts/AuthContext";
import {LoginFormInput} from "../../../_types/loginAndRegister";
import {
    emailIsValidate,
    loginCallApiForConnection,
    usernameIsValidate
} from "../../../@scripts/b_main/components/loginAndRegister/loginAndRegisterScript";
import {useNavigate} from "react-router";

//Formulaire de connexion
const LoginForm: FC = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const {dispatch} = useAuth()
    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
    const [registerInput, setRegisterInput] = useState<LoginFormInput>({
        email: '',
        password: '',
    });

    //récupère les valeurs de l'input à chaque changement
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setErrorMessages({});
        setRegisterInput({
            ...registerInput,
            [e.target.name]: e.target.value,
        });
    };

    //envoie les données du formulaire pour se connecter
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessages({});

        if (!emailIsValidate(registerInput.email, setErrorMessages)) {
            return
        }

        const data = {
            email: registerInput.email,
            password: registerInput.password
        };

        await loginCallApiForConnection(dispatch, setErrorMessages, navigate, data, setIsSubmitting)
    };

    return (
        <form className={"subscribe-form"} onSubmit={handleSubmit}>
            <SwitchForm/>
            <div className={"title"}>
                <h2>Connexion</h2>
                {errorMessages.loginError && <span className="error">{errorMessages.loginError}</span>}
                {errorMessages.email && <span className="error">{errorMessages.email}</span>}
            </div>

            <label className={"form-label"}>Email</label>
            <input name={"email"} type={"text"} id={errorMessages.loginError ? "input-form-error" : "input-form"} value={registerInput.email} onChange={handleInputChange} />

            <label className={"form-label"}>Mot de passe</label>
            <input name={"password"} type={"password"} id={errorMessages.loginError ? "input-form-error" : "input-form"} value={registerInput.password} onChange={handleInputChange}/>

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
