import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import NoAuthRouter from "./routers/NoAuthRouter";
import Router from "./routers/Router";
import {useNavigate} from "react-router";
import {authReducer, initialAuthState} from "./reducer/LoginReducer";
import { AuthContext } from './contexts/AuthContext';
import {getToken} from "./utilis/storage";
import {UserContext} from "./contexts/UserContext";
import {UserType} from "./@types/userType";
import {deleteTokenExpired} from "./@scripts/storage/loginCheck";
import {CompanyDetailsType} from "./@types/companyType";
import {companyDetailsDefault} from "./@data/companyValueDefault";
import { CompanyContext } from './contexts/CompanyContext';

function App() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    const [userInfo, setUserInfo] = useState<UserType>({id: 0, email: "", username:"", role:"", wallet:0} as UserType);
    const [company, setCompany] = useState<CompanyDetailsType>(companyDetailsDefault)

    useEffect(() => {
        const token = getToken();
        if (token) {
            deleteTokenExpired(token, dispatch, setUserInfo, navigate)
        }
    }, []);

    const Routing = () => {
        return getToken() ? <Router/> : <NoAuthRouter/>;
    };

  return (
      <AuthContext.Provider value={{state, dispatch}}>
          <UserContext.Provider value={{userInfo, setUserInfo}}>
              <CompanyContext.Provider value={{company, setCompany}}>
                  <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com"/>
                  <link href="https://fonts.googleapis.com/css2?family=Imprima&family=Krona+One&display=swap"
                        rel="stylesheet"/>
                  <Routing/>
              </CompanyContext.Provider>
          </UserContext.Provider>
      </AuthContext.Provider>
  );
}

export default App;
