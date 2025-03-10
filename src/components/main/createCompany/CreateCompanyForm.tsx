import {ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useContext, useState} from 'react';
import "../../../@styles/b_main/components/createCompanyPage/CreateCompanyForm.css"
import CloseIcon from '@mui/icons-material/Close';
import {CompanyCreated} from "../../../_types/user";
import {companyNameIsValidate, createCompany
} from "../../../@scripts/b_main/components/createCompany/createCompanyScript";
import {UserContext} from "../../../contexts/UserContext";
import {createCompanyData, defaultValueCompany} from "../../../_data/createCompanyData";
import {inputChange} from "../../../@scripts/b_main/components/formInput";

const CreateCompanyForm: FC<{setFormIsVisible: Dispatch<SetStateAction<boolean>>}> = ({setFormIsVisible}) => {
    const [selectSector, setSelectSector] = useState<string>("")
    const userContext = useContext(UserContext)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});

    const [companyInput, setCompanyInput] = useState<CompanyCreated>(defaultValueCompany);

    //Change la valeur de l'input du nom de l'entreprise
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        inputChange(setErrorMessages, setCompanyInput, companyInput, e)
    };

    //Ferme la fenêtre de création d'entreprise
    const handleClose = () => {
        setFormIsVisible(false)
    }

    //Permet de gérer quel secteur est sélectionné pour la création d'entreprise
    const handleChoiceSelector = (choice:number) => {
        setSelectSector(createCompanyData[choice].sectorName)
        setCompanyInput({
            ...companyInput,
            sector: createCompanyData[choice].sectorName,
        });
    }

    //Soumet au serveur back les informations de création de l'entreprise
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessages({});

        if (!companyNameIsValidate(companyInput.name, setErrorMessages)) {
            return
        }

        const data = {
            sector: companyInput.sector,
            name: companyInput.name,
            creation_date: "2024-10-10",
            id_user: userContext.userInfo.id,
            image: "path"
        }

        setIsSubmitting(true)
        await createCompany(setIsSubmitting, data, setErrorMessages)
    }

    return (
        <form className={"create-company-form"} onSubmit={handleSubmit}>
            <button className={"button-back"} onClick={handleClose}>
                <CloseIcon sx={{fontSize: "40px"}}/>
            </button>
            <h2>Créer votre entreprise</h2>

            <label className={"form-label"}>Nom de l'entreprise</label>
            {errorMessages.companyName && <span className="error">{errorMessages.companyName}</span>}
            <input name={"name"} type={"text"} id={errorMessages.companyName ? "input-form-company-error" : "input-form-company"} maxLength={35} value={companyInput.name} onChange={handleInputChange}/>

            <label className={"form-label"}>Choix du model industriel</label>
            <div className="img-models-industry">
                {createCompanyData.map((sector, index) =>
                    (
                        <div className={selectSector === sector.sectorName ? "image-container-selected" : "image-container"} onClick={() => handleChoiceSelector(index)} key={index}>
                            <img src={sector.src} alt={sector.alt}/>
                            <div className="overlay">
                                <h3>{sector.title}</h3>
                            </div>
                        </div>
                    )
                )}
            </div>

            {!isSubmitting ?
                <button type={"submit"} className={"subscribe-button"}>Continuer</button>
                :
                <div className="loadingtext">
                    <p>Création en cours</p>
                </div>
            }
        </form>
    );
};

export default CreateCompanyForm;
