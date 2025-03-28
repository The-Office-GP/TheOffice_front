import {NavigateFunction} from "react-router";
import {ChangeEvent, Dispatch, FormEvent, SetStateAction} from "react";
import {getTheOfficeDb, postTheOfficeDb} from "../../../../api/theofficeApi";
import {getUserInfo, saveUserInfo} from "../../../../utilis/storage";
import {UserType} from "../../../../@types/userType";
import {UserContextProps} from "../../../../contexts/UserContext";
import {LoginFormInput, RegisterFormInput, UpdateFormInput} from "../../../../@types/loginAndRegister";

//Soumission des informations pour pouvoir s'inscrire
export const submitRegister = async (e:FormEvent<HTMLFormElement>, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, registerInput: RegisterFormInput, setIsSubmitting:Dispatch<SetStateAction<boolean>>, setRegisterIsMake:Dispatch<SetStateAction<boolean>>, setDataForConnexion:Dispatch<SetStateAction<any>>) => {
    e.preventDefault();
    setErrorMessages({});

    if (!usernameIsValidate(registerInput.username, setErrorMessages) || !emailIsValidate(registerInput.email, setErrorMessages)) {
        return
    }

    if(!passwordConfirmIsValidate(registerInput.password, registerInput.passwordConfirmation, setErrorMessages)) {
        return
    }

    if (!passwordIsValidate(registerInput.password, setErrorMessages)) {
        return
    }

    setIsSubmitting(true);

    const data = {
        email: registerInput.email,
        username: registerInput.username,
        password: registerInput.password,
        role: "USER",
        wallet: registerInput.wallet
    };

    await subscribeCallApi(setErrorMessages, data, setIsSubmitting, setRegisterIsMake)
    setDataForConnexion({
        email: registerInput.email,
        password: registerInput.password,
    })
}

//Soumission des informations pour se connecter
export const submitLogin = async (e:FormEvent<HTMLFormElement>, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, loginInput: LoginFormInput, setIsSubmitting:Dispatch<SetStateAction<boolean>>, dispatch:any, userContext:UserContextProps, navigate:NavigateFunction) => {
    e.preventDefault();
    setErrorMessages({});

    if (!emailIsValidate(loginInput.email, setErrorMessages)) {
        return
    }

    const data = {
        email: loginInput.email,
        password: loginInput.password
    };

    await loginCallApiForConnection(dispatch, setErrorMessages, userContext, data, setIsSubmitting, navigate)
}

//Permet à l'utilisateur de se connecter
export const loginCallApiForConnection = async (dispatch:any, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, userContext: UserContextProps, data:any, setIsSubmitting: Dispatch<SetStateAction<boolean>>, navigate:NavigateFunction ) => {
    let response:any
    setIsSubmitting(true)

    try {
        response = await postTheOfficeDb('/auth/login', data);
        if (response.status === 200) {
            const token = response.data
            dispatch({type: 'LOGIN', payload: {token: token}})
            await collectUserInfo(token, userContext, setIsSubmitting, navigate)
        } else {
            setErrorMessages({
                loginError: "Veuillez vérifier votre nom de compte et votre mot de passe, puis réessayer.",
            });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    } finally {
        setIsSubmitting(false)
    }
}

//Permet à l'utilisateur de s'inscrire
export const subscribeCallApi = async (setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, data:any, setIsSubmitting: Dispatch<SetStateAction<boolean>>, setRegisterIsMake: Dispatch<SetStateAction<boolean>>) => {
    let response: any
    setIsSubmitting(true)

    try {
        response = await postTheOfficeDb('/auth/register', data);
        if (response.status === 200) {
            setRegisterIsMake(true);
        } else {
            if ((response.response === "Error: Email is already in use!")) {
                setErrorMessages({
                    email: "L'email est déja utilisé",
                });
            } else if (response.response.password === "Mot de passe invalide") {
                setErrorMessages({
                    passwordConfirm: "Le mot de passe doit avoir : une majuscule, un chiffre, et un caractère spéciale",
                });
            }
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    } finally {
        setIsSubmitting(false);
    }
}


//Vérifie que le nom de l'utilisateur n'est pas nul ou juste un espace
export const usernameIsValidate = (username:string, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>) => {
    if (username.length === 0 || username === " ") {
        setErrorMessages({
            username: "Le nom d'utilisateur n'est pas valide",
        });
        return false;
    }
    else{
        return true;
    }
}

//vérifie que le mail est bien au format mail
export const emailIsValidate = (email:string, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>) => {
    const emailRegex:RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        setErrorMessages({
            email: "L'email n'est pas valide",
        });
        return false;
    }
    else {
        return true;
    }
}

//vérifie que le mail est bien au format mail
export const passwordConfirmIsValidate = (password:string, confirmPassword:string, setErrorMessages: Dispatch<SetStateAction<{[key: string]: string }>>) => {
    if (password !== confirmPassword) {
        setErrorMessages({
            password: "Le mot de passe doit correspondre à sa confirmation",
        });
        return false;
    } else {
        return true;
    }
}

//vérifie que le mail est bien au format mail
export const passwordIsValidate = (password: string, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{12,}$/;

    if (!passwordRegex.test(password)) {
        setErrorMessages({
            password: "Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial, et avoir 12 caractères minimum",
        });
        return false;
    } else {
        return true;
    }
}

//permet de récupérer les informations de l'utilisateur après une connexion
export const collectUserInfo = async (token: string, userContext:UserContextProps, setIsSubmitting: Dispatch<SetStateAction<boolean>>,navigate:NavigateFunction) => {
    try {
        const response = await getTheOfficeDb('/users/connected', {headers: {Authorization: `Bearer ${token}`}})
        saveUserInfo(response)
        const userInfo = getUserInfo();

        if (userInfo) {
            try {
                const parsedUserInfo = JSON.parse(userInfo);
                const userInfoFormater:UserType = {
                    id:parsedUserInfo.id,
                    email: parsedUserInfo.email,
                    username: parsedUserInfo.username,
                    role: parsedUserInfo.role,
                    wallet: parsedUserInfo.wallet,
                }
                userContext.setUserInfo(userInfoFormater);
                navigate("/")
            } catch (jsonError) {
                console.error("Erreur de parsing JSON:", jsonError);
            }
        } else {
            console.error("Erreur : L'utilisateur n'a pas pu être récupéré.");
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    } finally {
        setIsSubmitting(false);
    }
};

//Soumission des informations pour mettre à jour les données personelles
export const submitUpdateUser = async (
    e: FormEvent<HTMLFormElement>,
    setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>,
    updateInput: UpdateFormInput,
    setIsSubmitting: Dispatch<SetStateAction<boolean>>,
    dispatch: any,
    userContext: UserContextProps
) => {
    e.preventDefault();
    setErrorMessages({});

    if (!usernameIsValidate(updateInput.username, setErrorMessages)) {
        return;
    }

    if (!passwordIsValidate(updateInput.newPassword, setErrorMessages)) {
        return;
    }

    setIsSubmitting(true);

    const data = {
        username: updateInput.username,
        password: updateInput.newPassword,
    };

    await updateUserCallApi(setErrorMessages, data, setIsSubmitting, dispatch, userContext);
};

//Permet à l'utilisateur de mettre à jour ses données
export const updateUserCallApi = async (
    setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>,
    data: { username: string; password: string },
    setIsSubmitting: Dispatch<SetStateAction<boolean>>,
    dispatch: any,
    userContext: UserContextProps
) => {
    let response: any;
    setIsSubmitting(true);

    try {
        const userId = userContext.userInfo?.id;
        const userInfoString = getUserInfo();
        const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
        const token = userInfo?.token; // Maintenant, on peut accéder à token

        console.log("Token envoyé :", token);
        console.log("getUserInfo() retourne :", userInfoString);

        if (!userId || !token) {
            setErrorMessages({updateError: "Utilisateur non authentifié."});
            return;
        }

        response = await postTheOfficeDb(`/users/${userId}`, data, {
            headers: {Authorization: `Bearer ${token}`},
        });

        console.log("Réponse API :", response);

        if (response.status === 200) {
            const updatedUser = {
                ...userContext.userInfo,
                username: data.username,
            };

            userContext.setUserInfo(updatedUser);
            saveUserInfo(updatedUser);
        } else {
            setErrorMessages({updateError: "Échec de la mise à jour."});
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour:", error);
    } finally {
        setIsSubmitting(false);
    }
};



