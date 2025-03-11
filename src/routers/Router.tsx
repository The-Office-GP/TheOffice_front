import {FC, lazy} from 'react';
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import MainLayoutConnection from "../layout/MainLayoutConnection";
import {RouteType} from "../_types/routes/routeType";

const UserPage = lazy(() => import("../pages/b_main/UserPage"));

const Router: FC = () => {
    //tableau des routes
    const routesAuth: RouteType[] = [
        {path: "/", element: <UserPage/>},
        {path: "/user", element: <UserPage/>},
        {path: "/dashboard", element: <UserPage/>},
        {path: "/paramètres", element: <UserPage/>},
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