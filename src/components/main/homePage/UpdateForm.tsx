import {ChangeEvent, FC, FormEvent, useContext, useState} from 'react';
import {submitRegister, submitUpdateUser} from "../../../@scripts/main/components/loginAndRegister/loginAndRegisterScript";
import {UserContext} from "../../../contexts/UserContext";
import {useAuth} from "../../../contexts/AuthContext";
import {inputChange} from "../../../@scripts/main/components/formInput";
import {useNavigate} from "react-router";
import {handleDashboard} from "../../../@scripts/header/dropdownScript";

const UpdateForm: FC<{}> = ({}) => {
    const {dispatch} = useAuth()
    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [updateInput, setUpdateInput] = useState({
        email : "",
        username: "",
        newPassword: "",
        confirmNewPassword: ""
    });
    const {userInfo, setUserInfo} = useContext(UserContext); // Contexte utilisateur

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        await submitUpdateUser(e, setErrorMessages , updateInput, setIsSubmitting, dispatch, {userInfo, setUserInfo});};

    //récupère données des inputs à chaque changement
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        inputChange(setErrorMessages, setUpdateInput, updateInput, e)
    };

    return (
        <form className={"subscribe-form"} onSubmit={handleSubmit}>
            <div className={"title"}>
                <h2>Modifier mes informations personnelles</h2>
            </div>
            <label className={"form-label"}>Nom d'utilisateur</label>
            <input name={"username"} type={"text"} id={errorMessages.username ? "input-form-error" : "input-form"}
                   value={updateInput.username} onChange={handleInputChange}/>

            <label className={"form-label"}>Mot de passe</label>
            <input name={"newPassword"} type={"password"} id={errorMessages.password ? "input-form-error" : "input-form"}
                   value={updateInput.newPassword} onChange={handleInputChange}/>

            <label className={"form-label"}>Confirmer le mot de passe</label>
            <input name={"confirmNewPassword"} type={"password"}
                   id={errorMessages.password ? "input-form-error" : "input-form"}
                   value={updateInput.confirmNewPassword} onChange={handleInputChange}/>

            <button type={"submit"} className={"subscribe-button"} onClick={() => handleDashboard(navigate)}>Mettre à jour</button>
        </form>
    );
};

export default UpdateForm;
