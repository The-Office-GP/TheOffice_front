import {FC, lazy} from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import MainLayoutConnection from "../layout/MainLayoutConnection";
import {RouteType} from "../_types/routes/routeType";

const CompanyPage = lazy(() => import("../pages/b_main/CompanyPage"));

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