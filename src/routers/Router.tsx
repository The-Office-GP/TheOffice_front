import {FC} from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import MainLayoutConnection from "../layout/MainLayoutConnection";
import CreateCompanyPage from "../pages/b_main/CreateCompanyPage";

const Router: FC<{}> = ({}) => {
    return (
        <Routes>
            <Route path="/" element={<MainLayoutConnection/>}>
                <Route path={"/createCompany"} element={<CreateCompanyPage/>}/>
            </Route>
        </Routes>
    );
};

export default Router;