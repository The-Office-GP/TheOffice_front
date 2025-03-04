import {FC} from 'react';
import '../../../@styles/b_main/components/loginAndRegister/switchForm.css'

const SwitchForm: FC<{}> = ({}) => {
    return (
        <label htmlFor="filter" className="switch" aria-label="Toggle Filter">
            <input type="checkbox" id="filter"/>
            <span>Se connecter</span>
            <span>S'inscrire</span>
        </label>
    );
};

export default SwitchForm;
