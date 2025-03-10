import {FC} from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import MainLayoutConnection from "../layout/MainLayoutConnection";
import CompanyPage from "../pages/b_main/CompanyPage";
import {RouteType} from "../_types/routes/routeType";

const Router: FC = () => {
    //tableau des routes
    const routesAuth: RouteType[] = [
        {path: "/", element: <CompanyPage/>},
        {path: "/creation", element: <CompanyPage/>},
        {path: "/dashboard", element: <CompanyPage/>},
        {path: "/paramètres", element: <CompanyPage/>},
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