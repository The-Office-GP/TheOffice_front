import {FC} from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import MainLayoutConnection from "../layout/MainLayoutConnection";
import CreateCompanyPage from "../pages/b_main/CreateCompanyPage";
import {RouteType} from "../_types/routes/routeType";

const Router: FC = () => {
    //tableau des routes
    const routesAuth: RouteType[] = [
        {path: "/", element: <CreateCompanyPage/>},
        {path: "/creation", element: <CreateCompanyPage/>},
        {path: "/dashboard", element: <CreateCompanyPage/>},
        {path: "/paramètres", element: <CreateCompanyPage/>},
    ]

    return (
        <Routes>
            <Route path="/" element={<MainLayoutConnection/>}>
                {routesAuth.map((route) => <Route path={route.path} element={route.element}/>)}
            </Route>
        </Routes>
    );
};

export default Router;