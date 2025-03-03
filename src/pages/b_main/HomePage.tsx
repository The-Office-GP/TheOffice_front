import {FC} from 'react';
import LoginForm from "../../components/main/loginAndRegister/LoginForm";
import '../../@styles/b_main/pages/homePage.css';

const HomePage: FC<{}> = ({}) => {
    return (
        <>
            <title>Page de d'accueil</title>
            <main>
                <LoginForm/>
            </main>
        </>
    );
};

export default HomePage;
