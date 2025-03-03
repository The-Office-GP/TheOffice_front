import React from 'react';
import './App.css';
import NoAuthRouter from "./routers/NoAuthRouter";
import Router from "./routers/NoAuthRouter";
import {BrowserRouter} from "react-router";

function App() {
    const stateConnexion = false

    const Routing = () => {
        return stateConnexion ? <Router/> : <NoAuthRouter/>;
    };

  return (
      <BrowserRouter>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet"/>
          <Routing/>
      </BrowserRouter>
  );
}

export default App;
