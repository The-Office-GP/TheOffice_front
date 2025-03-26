import {ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useContext, useState} from 'react';
import '../../../@styles/main/components/loginAndRegister/form.css'
import {RegisterFormInput} from "../../../@types/loginAndRegister";
import {loginCallApiForConnection, submitRegister} from "../../../@scripts/main/components/loginAndRegister/loginAndRegisterScript";
import {useNavigate} from "react-router";
import {useAuth} from "../../../contexts/AuthContext";
import {UserContext} from "../../../contexts/UserContext";
import {inputChange} from "../../../@scripts/main/components/formInput";

//Formulaire d'inscription qui permet à la fin soit de se connecter soit de retourner à l'accueil
const RegisterForm: FC<{ registerIsMake: boolean, setRegisterIsMake: Dispatch<SetStateAction<boolean>>}> = ({registerIsMake, setRegisterIsMake})=> {
    const {dispatch} = useAuth()
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [dataForConnexion, setDataForConnexion] = useState({})

    const userContext = useContext(UserContext)
    const navigate = useNavigate()

    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});

    const [registerInput, setRegisterInput] = useState<RegisterFormInput>({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        wallet: null,
    });

    //récupère données des inputs à chaque changement
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        inputChange(setErrorMessages, setRegisterInput, registerInput, e)
    };

    //envoie les données à la base de données pour s'inscrire après avoir vérifié leur validité
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        await submitRegister(e, setErrorMessages, registerInput, setIsSubmitting, setRegisterIsMake, setDataForConnexion)
    };

    //connecte l'utilisateur
    const handleSubmitForConnexion = async () => {
        await loginCallApiForConnection(dispatch, setErrorMessages, userContext, dataForConnexion, setIsSubmitting, navigate)

    };

    return (
        <>
            {registerIsMake ?
                <div className={"subscribe-form"}>
                    <h2>Enregistrement effectué !</h2>
                    {!isSubmitting ?
                        <button type={"button"} className={"subscribe-button"} onClick={handleSubmitForConnexion}>Connexion</button>
                        :
                        <div className="loadingtext">
                            <p>Vérification</p>
                        </div>
                    }
                </div>
                :
                <form className={"subscribe-form"} onSubmit={handleSubmit}>
                    <div className={"title"}>
                        <h2>Inscription</h2>
                        {errorMessages.username && <div className="error">{errorMessages.username}</div>}
                        {errorMessages.email && <div className="error">{errorMessages.email}</div>}
                        {errorMessages.password && <div className="error">{errorMessages.password}</div>}
                    </div>

                    <label className={"form-label"}>Nom d'utilisateur</label>
                    <input name={"username"} type={"text"} id={errorMessages.username ? "input-form-error" : "input-form"} value={registerInput.username} onChange={handleInputChange}/>

                    <label className={"form-label"}>Email</label>
                    <input name={"email"} type={"text"} id={errorMessages.email ? "input-form-error" : "input-form"} value={registerInput.email} onChange={handleInputChange}/>

                    <label className={"form-label"}>Mot de passe</label>
                    <input name={"password"} type={"password"} id={errorMessages.password ? "input-form-error" : "input-form"} value={registerInput.password} onChange={handleInputChange}/>

                    <label className={"form-label"}>Confirmer le mot de passe</label>
                    <input name={"passwordConfirmation"} type={"password"} id={errorMessages.password ? "input-form-error" : "input-form"} value={registerInput.passwordConfirmation} onChange={handleInputChange}/>

                    {!isSubmitting ?
                        <button type={"submit"} className={"subscribe-button"}>S'inscrire</button>
                        :
                        <div className="loadingtext">
                            <p>Vérification</p>
                        </div>
                    }
                </form>
            }
        </>

    );
};

export default RegisterForm;