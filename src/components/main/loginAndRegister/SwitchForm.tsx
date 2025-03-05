import {FC, useContext} from 'react';
import '../../../@styles/b_main/components/loginAndRegister/switchForm.css'
import {FormContext} from "../../../contexts/FormContext";

const SwitchForm: FC = () => {
    const formContext = useContext(FormContext)

    //inverse la valeur du switch
    const handleSwitch = () => {
        formContext.setRegisterIsVisible(!formContext.registerIsVisible)
    }

    return (
        <label htmlFor="filter" className="switch" aria-label="Toggle Filter">
            <input type="checkbox" id="filter" checked={formContext.registerIsVisible} onChange={handleSwitch}/>
            <span>Se connecter</span>
            <span>S'inscrire</span>
        </label>
    );
};

export default SwitchForm;
