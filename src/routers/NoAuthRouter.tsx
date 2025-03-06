import {FC} from 'react';
import HomePage from "../pages/b_main/HomePage";
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import MainLayout from "../layout/MainLayout";

const NoAuthRouter: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/Home" element={<HomePage/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Route>
        </Routes>
    );
};

export default NoAuthRouter;