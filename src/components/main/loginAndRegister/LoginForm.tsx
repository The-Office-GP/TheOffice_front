import {ChangeEvent, FormEvent} from "react";
import {FC, useState} from 'react';
import '../../../@styles/b_main/components/loginAndRegister/form.css'
import SwitchForm from "./SwitchForm";
import {useAuth} from "../../../contexts/AuthContext";
import {LoginFormInput} from "../../../_types/loginAndRegister";
import {loginCallApiForConnection} from "../../../@scripts/b_main/components/loginAndRegister/loginAndRegisterScript";
import {useNavigate} from "react-router";

const LoginForm: FC<{}> = ({}) => {
    const {dispatch} = useAuth()
    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
    const [registerInput, setRegisterInput] = useState<LoginFormInput>({
        email: '',
        password: '',
    });

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setRegisterInput({
            ...registerInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessages({});

        const data = {
            email: registerInput.email,
            password: registerInput.password
        };

        loginCallApiForConnection(dispatch, setErrorMessages, navigate, data)
    };

    return (
        <form className={"subscribe-form"} onSubmit={handleSubmit}>
            <SwitchForm/>
            <h2>Connection</h2>

            <label className={"form-label"}>Email</label>
            <input name={"email"} type={"email"} id={"input-form"} value={registerInput.email} onChange={handleInputChange} />

            <label className={"form-label"}>Mot de passe</label>
            {errorMessages.password && <span className="error">{errorMessages.password}</span>}
            <input name={"password"} type={"password"} id={"input-form"}/>

            <button type={"submit"} className={"subscribe-button"}>Se connecter</button>

        </form>
    );
};

export default LoginForm;
