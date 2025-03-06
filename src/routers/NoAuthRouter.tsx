import {FC} from 'react';
import HomePage from "../pages/b_main/HomePage";
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import MainLayout from "../layout/MainLayout";
import CreateCompanyPage from "../pages/b_main/CreateCompanyPage";

const NoAuthRouter: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/Home" element={<HomePage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path={"/create-company"} element={<CreateCompanyPage/>}/>
            </Route>
        </Routes>
    );
};

export default NoAuthRouter;