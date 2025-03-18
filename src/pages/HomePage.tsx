import {FC, useState} from 'react';
import LoginForm from "../components/main/homePage/LoginForm";
import '../@styles/main/pages/homePage.css';
import RegisterForm from "../components/main/homePage/RegisterForm";
import {FormContext} from "../contexts/FormContext";

//Page d'accueil qui sert pour la connexion et l'inscription
const HomePage: FC = () => {
    const [registerIsVisible, setRegisterIsVisible] = useState<boolean>(false);

    return (
        <FormContext.Provider value={{registerIsVisible, setRegisterIsVisible}}>
            <title>Accueil</title>
            <main className={"office-background"}>
                {registerIsVisible ? <RegisterForm/> : <LoginForm/>}
            </main>
        </FormContext.Provider>
    );
};

export default HomePage;
