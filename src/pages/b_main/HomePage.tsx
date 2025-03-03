import {FC} from 'react';
import LoginForm from "../../components/main/loginAndRegister/LoginForm";
import '../../@styles/b_main/pages/homePage.css';
import RegisterForm from "../../components/main/loginAndRegister/RegisterForm";

const HomePage: FC<{}> = ({}) => {
    return (
        <>
            <title>Page de d'accueil</title>
            <main>
                <RegisterForm/>
                <LoginForm/>
            </main>
        </>
    );
};

export default HomePage;
