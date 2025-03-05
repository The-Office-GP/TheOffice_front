import {FC, useState} from 'react';
import LoginForm from "../../components/main/loginAndRegister/LoginForm";
import '../../@styles/b_main/pages/homePage.css';
import RegisterForm from "../../components/main/loginAndRegister/RegisterForm";
import {FormContext} from "../../contexts/FormContext";

//Page d'accueil qui sert pour la connexion et l'inscription
const HomePage: FC = () => {
    const [registerIsVisible, setRegisterIsVisible] = useState<boolean>(false);

    return (
        <FormContext.Provider value={{registerIsVisible, setRegisterIsVisible}}>
            <title>Accueil</title>
            <main>
                {registerIsVisible ? <RegisterForm/> : <LoginForm/>}
            </main>
        </FormContext.Provider>
    );
};

export default HomePage;
