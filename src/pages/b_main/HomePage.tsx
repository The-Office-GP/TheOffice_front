import {FC, useState} from 'react';
import LoginForm from "../../components/main/loginAndRegister/LoginForm";
import '../../@styles/b_main/pages/homePage.css';
import RegisterForm from "../../components/main/loginAndRegister/RegisterForm";
import {FormContext} from "../../contexts/FormContext";

const HomePage: FC = () => {
    const [registerIsVisible, setRegisterIsVisible] = useState<boolean>(false);

    return (
        <FormContext.Provider value={{registerIsVisible, setRegisterIsVisible}}>
            <title>Page de d'accueil</title>
            <main>
                {registerIsVisible ? <RegisterForm/> : <LoginForm/>}
            </main>
        </FormContext.Provider>
    );
};

export default HomePage;
