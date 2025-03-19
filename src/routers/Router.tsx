import {FC} from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import MainLayoutConnection from "../layout/MainLayoutConnection";
import {RouteType} from "../@types/routes/routeType";
import UserPage from "../pages/UserPage";
import CompanyPage from "../pages/CompanyPage";

const Router: FC = () => {
    //tableau des routes
    const routesAuth: RouteType[] = [
        {path: "/", element: <UserPage/>},
        {path: "/user", element: <UserPage/>},
        {path: "/dashboard", element: <UserPage/>},
        {path: "/setting", element: <UserPage/>},
        {path: "/company/:id", element: <CompanyPage/>}
    ]

    return (
        <Routes>
            <Route path="/" element={<MainLayoutConnection/>}>
                {routesAuth.map((route:RouteType, index:number) => <Route key={index} path={route.path} element={route.element}/>)}
            </Route>
        </Routes>
    );
};

export default Router;