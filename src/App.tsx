import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import NoAuthRouter from "./routers/NoAuthRouter";
import Router from "./routers/Router";
import {BrowserRouter, useNavigate} from "react-router";
import {authReducer, initialAuthState} from "./reducer/LoginReducer";
import { AuthContext } from './contexts/AuthContext';
import {getToken, removeToken} from "./utilis/storage";
import {UserContext} from "./contexts/UserContext";
import {User} from "./_types/user";
import {jwtDecode, JwtPayload} from "jwt-decode";
import router from "./routers/Router";

function App() {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    const [userInfo, setUserInfo] = useState<User>({id:0, email:"", username:"", role:"", wallet:0} as User);
    const navigate = useNavigate();

    const isTokenExpired = (token:string) => {
        if (!token) return true;
        try {
            const decodedToken:JwtPayload = jwtDecode(token);
            const currentTime:number = Date.now() / 1000;
            if (decodedToken.exp !== undefined){
                return decodedToken.exp < currentTime;
            }
        } catch (error) {
            console.error('Error decoding token:', error);
            return true;
        }
    };

    useEffect(() => {
        const token = getToken();
        if (token) {
            if (isTokenExpired(token)) {
                dispatch({type: 'LOGOUT'});
                setUserInfo({id: 0, email: "", username: "", role: "", wallet: 0} as User)
                navigate("/")
            }
        }
    }, []);


    const Routing = () => {
        return getToken() ? <Router/> : <NoAuthRouter/>;
    };

  return (
      <AuthContext.Provider value={{state, dispatch}}>
          <UserContext.Provider value={{userInfo, setUserInfo}}>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Imprima&family=Krona+One&display=swap" rel="stylesheet"/>
              <Routing/>
          </UserContext.Provider>
      </AuthContext.Provider>
  );
}

export default App;
