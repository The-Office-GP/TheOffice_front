import {FC} from 'react';
import HomePage from "../pages/b_main/HomePage";
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import MainLayoutConnection from "../layout/MainLayoutConnection";

const Router: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<MainLayoutConnection/>}>
                <Route path="/Home" element={<HomePage/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Route>
        </Routes>
    );
};

export default Router;