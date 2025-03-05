import {ChangeEvent, FC, FormEvent, useState} from 'react';
import '../../../@styles/b_main/components/loginAndRegister/form.css'
import SwitchForm from "./SwitchForm";
import {RegisterFormInput} from "../../../_types/loginAndRegister";
import {subscribeCallApi} from "../../../@scripts/b_main/components/loginAndRegister/loginAndRegisterScript";
import {useNavigate} from "react-router";

const RegisterForm: FC = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
    const [registerIsMake, setRegisterIsMake] = useState<boolean>(false);
    const [registerInput, setRegisterInput] = useState<RegisterFormInput>({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorMessages({});
        setRegisterInput({
            ...registerInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessages({});

        if(registerInput.username.length == 0 || registerInput.username === " "){
            setErrorMessages({
                username: "Le nom d'utilisateur n'est pas valide",
            });
            return;
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(registerInput.email)) {
            setErrorMessages({
                email: "L'email n'est pas valide",
            });
            return;
        }

        if (registerInput.password !== registerInput.passwordConfirmation) {
            console.log("test")
            setErrorMessages({
                password: "Les mots de passe saisis ne correspondent pas",
            });
            return;
        }

        setIsSubmitting(true);

        const data = {
            email: registerInput.email,
            username: registerInput.username,
            password: registerInput.password,
            role: "USER",
            wallet: 1
        };

        subscribeCallApi(setErrorMessages, navigate, data, setIsSubmitting, setRegisterIsMake)

    };

    return (
        <form className={"subscribe-form"} onSubmit={handleSubmit}>
            <SwitchForm/>
            <div className={"title"}>
                <h2>Inscription</h2>
                {errorMessages.username && <div className="error">{errorMessages.username}</div>}
                {errorMessages.email && <div className="error">{errorMessages.email}</div>}
                {errorMessages.password && <div className="error">{errorMessages.password}</div>}
            </div>

            <label className={"form-label"}>Nom d'utilisateur</label>
            <input name={"username"} type={"text"} id={errorMessages.username ? "input-form-error" : "input-form"} value={registerInput.username} onChange={handleInputChange}/>

            <label className={"form-label"}>Email</label>
            <input name={"email"} type={"text"} id={errorMessages.email ? "input-form-error" : "input-form"}value={registerInput.email} onChange={handleInputChange} />

            <label className={"form-label"}>Mot de passe</label>
            <input name={"password"} type={"password"} id={errorMessages.password ? "input-form-error" : "input-form"}value={registerInput.password} onChange={handleInputChange} />

            <label className={"form-label"}>Confirmer le mot de passe</label>
            <input name={"passwordConfirmation"} type={"password"} id={errorMessages.password ? "input-form-error" : "input-form"} value={registerInput.passwordConfirmation} onChange={handleInputChange}/>

            <button type={"submit"} className={"subscribe-button"}>S'inscrire</button>
        </form>
    );
};

export default RegisterForm;
