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
          <Routing/>
      </BrowserRouter>
  );
}

export default App;
