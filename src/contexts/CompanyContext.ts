import {createContext, Dispatch, SetStateAction} from "react";
import {CompanyDetailsType} from "../@types/companyType";
import {companyDetailsDefault} from "../@data/companyValueDefault";

interface CompanyContextProps {
    company: CompanyDetailsType;
    setCompany: Dispatch<SetStateAction<CompanyDetailsType>>;
}

const defaultContextValue: CompanyContextProps = {
    company: companyDetailsDefault,
    setCompany: () => {
    },
};

export const CompanyContext = createContext<CompanyContextProps>(defaultContextValue);