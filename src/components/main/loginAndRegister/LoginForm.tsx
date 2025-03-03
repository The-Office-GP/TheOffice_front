import {FC} from 'react';

const LoginForm: FC<{}> = ({}) => {
    return (
        <form className={"subscribe-form"}>
            <h2>Connection</h2>
            <label className={"form-label"}>Email</label>
            <input name={"email"} type={"email"} id={"input-form"}/>
            <label className={"form-label"}>Mot de passe</label>
            <input name={"password"} type={"password"} id={"input-form"}/>
            <button type={"submit"} className={"subscribe-button"}>Se connecter</button>
        </form>
    );
};

export default LoginForm;
