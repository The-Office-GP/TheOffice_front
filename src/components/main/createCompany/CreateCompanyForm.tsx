import {ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useContext, useState} from 'react';
import "../../../@styles/b_main/components/createCompanyPage/CreateCompanyForm.css"
import CloseIcon from '@mui/icons-material/Close';
import {CompanyCreated} from "../../../_types/user";
import {
    companyNameIsValidate,
    createCompany
} from "../../../@scripts/b_main/components/createCompany/createCompanyScript";
import {UserContext} from "../../../contexts/UserContext";

const CreateCompanyForm: FC<{setFormIsVisible: Dispatch<SetStateAction<boolean>>}> = ({setFormIsVisible}) => {
    const [selectSector, setSelectSector] = useState<string>("")
    const userContext = useContext(UserContext)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});

    const [companyInput, setCompanyInput] = useState<CompanyCreated>({
        sector: "",
        name: "",
        creation_date: "2024-10-10",
        id_user: 0,
        image: "path",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorMessages({});
        setCompanyInput({
            ...companyInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleClose = () => {
        setFormIsVisible(false)
    }

    const handleChoiceSelector = (choice:number) => {
        switch (choice){
            case(0):
                setSelectSector("carpentry")
                setCompanyInput({
                    ...companyInput,
                    sector: "carpentry",
                });
                break
            case(1):
                setSelectSector("creamery")
                setCompanyInput({
                    ...companyInput,
                    sector: "creamery",
                });
                break
            case(2):
                setSelectSector("quarry")
                setCompanyInput({
                    ...companyInput,
                    sector: "quarry",
                });
                break
        }
    }

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
            <input name={"name"} type={"text"} id={errorMessages.companyName ? "input-form-company-error" : "input-form-company"} maxLength={35}
                   value={companyInput.name} onChange={handleInputChange}/>

            <label className={"form-label"}>Choix du model industriel</label>
            <div className="img-models-industry">
                <div className={selectSector==="carpentry" ? "image-container-selected" : "image-container"} onClick={() => handleChoiceSelector(0)}>
                    <img
                        src="/images/Business-model-1.png"
                        alt="image model industriel 1"/>
                    <div className="overlay">
                        <h3>Menuiserie</h3>
                    </div>
                </div>
                <div className={selectSector === "creamery" ? "image-container-selected" : "image-container"} onClick={() => handleChoiceSelector(1)}>
                    <img
                        src="/images/Business-model-2.png"
                        alt="image model industriel 2"/>
                    <div className="overlay">
                        <h3>Laiterie</h3>
                    </div>
                </div>
                <div className={selectSector === "quarry" ? "image-container-selected" : "image-container"} onClick={() => handleChoiceSelector(2)}>
                    <img
                        src="/images/Business-model-3.png"
                        alt="image model industriel 3"/>
                    <div className="overlay">
                        <h3>Carrières</h3>
                    </div>
                </div>
            </div>

            <button type={"submit"} className={"subscribe-button"}>Continuer</button>
        </form>
    );
};

export default CreateCompanyForm;
