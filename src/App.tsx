import React, {useReducer} from 'react';
import './App.css';
import NoAuthRouter from "./routers/NoAuthRouter";
import Router from "./routers/NoAuthRouter";
import {BrowserRouter} from "react-router";
import {authReducer, initialAuthState} from "./reducer/LoginReducer";
import { AuthContext } from './contexts/AuthContext';
import {getToken} from "./utilis/storage";

function App() {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    const Routing = () => {
        //console.log(state);
        //console.log(dispatch);
        return getToken() ? <Router/> : <NoAuthRouter/>;
    };

  return (
      <BrowserRouter>
          <AuthContext.Provider value={{state, dispatch}}>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Imprima&family=Krona+One&display=swap" rel="stylesheet"/>
              <Routing/>
          </AuthContext.Provider>
      </BrowserRouter>
  );
}

export default App;
