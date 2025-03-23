import {Dispatch, FormEvent, SetStateAction} from "react";
import {postTheOfficeDb, putTheOfficeDbUser} from "../../../../api/theofficeApi";
import {getToken, getUserInfo, saveUserInfo} from "../../../../utilis/storage";
import {createCompanyData} from "../../../../@data/createCompanyData";
import {CompanyCreatedType, UserType} from "../../../../@types/userType";
import {UserContextProps} from "../../../../contexts/UserContext";

//Permet de créer une entreprise rattachée à l'id de l'utilisateur dans la base de données
export const createCompany = async (setIsSubmitting:Dispatch<SetStateAction<boolean>>, data:any,setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, data2:UserType) => {
    let response: any
    setIsSubmitting(true)

    try {
        response = await postTheOfficeDb('/companies/create', data, {headers: {Authorization: `Bearer ${getToken()}`}});
        if (response.status === 200 || response.status === 201) {
            console.log("Successfully created company")
            try {
                await putTheOfficeDbUser(`/users/${data2.id}`, data2, getToken())
            } catch (error){
                console.error('Erreur lors de la connexion:', error);
            }
        } else {
            setErrorMessages({
                email: "L'email est déja utilisé",
            });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
    } finally {
        setIsSubmitting(false);
    }
}

//Vérifie que le nom de l'entreprise commence par une lettre et ne contient pas de caractères spéciaux sauf espace et apostrophe
export const companyNameIsValidate = (name: string, setErrorMessages: Dispatch<SetStateAction<{[key: string]: string }>>) => {
    const nameRegex = /^[A-Za-z]([A-Za-z' ]*)$/;
    if (!nameRegex.test(name) || name.length < 1) {
        setErrorMessages({
            companyName: "Le nom n'est pas valide: le premier caractère doit être une lettre et seuls les apostrophe et espace sont autorisé."
        });
        return false;
    } else {
        return true;
    }
}

//Vérifie qu'un secteur a été sélectionné
export const companySectorIsValidate = (sector: string, setErrorMessages: Dispatch<SetStateAction<{[key: string]: string }>>) => {
    if (sector !== "carpentry" && sector !== "creamery" && sector !== "quarry") {
        setErrorMessages({
            companySector: "Veuillez selectionner un secteur"
        });
        return false;
    } else {
        return true;
    }
}

//Enregistre dans l'objet company input le choix du secteur d'activité
export const applyTheChoice = (choice:number, setSelectSector:Dispatch<SetStateAction<string>>, companyInput:CompanyCreatedType, setCompanyInput:Dispatch<SetStateAction<CompanyCreatedType>>) => {
    setSelectSector(createCompanyData[choice].sectorName)
    setCompanyInput({
        ...companyInput,
        sector: createCompanyData[choice].sectorName,
    });
}

//Soumet les informations de l'entreprise pour la création
export const submitCompanyInfo = async (e: FormEvent<HTMLFormElement>, setErrorMessages: Dispatch<SetStateAction<{ [key: string]: string }>>, companyInput:CompanyCreatedType, userContext:UserContextProps, setIsSubmitting:Dispatch<SetStateAction<boolean>>, setFormIsVisible:Dispatch<SetStateAction<boolean>>) => {
    e.preventDefault();
    setErrorMessages({});

    if (!companyNameIsValidate(companyInput.name, setErrorMessages)) {
        return
    }

    if (!companySectorIsValidate(companyInput.sector, setErrorMessages)) {
        return
    }

    const data = {
        sector: companyInput.sector,
        name: companyInput.name,
        creation_date: "2024-10-10",
        popularity: 0,
        id_user: userContext.userInfo.id,
        image: "path"
    }

    const updatedUserInfo: UserType = {
        ...userContext.userInfo,
        wallet: userContext.userInfo.wallet - 100000
    };

    userContext.setUserInfo(updatedUserInfo);
    saveUserInfo(updatedUserInfo);
    console.log(getUserInfo());

    setIsSubmitting(true);

    await createCompany(setIsSubmitting, data, setErrorMessages, updatedUserInfo);
    setFormIsVisible(false)
}