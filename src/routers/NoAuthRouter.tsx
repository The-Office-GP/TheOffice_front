import {FC} from 'react';
import HomePage from "../pages/HomePage";
import {Routes} from "react-router-dom";
import {Route} from "react-router";
import MainLayout from "../layout/MainLayout";
import {RouteType} from "../@types/routes/routeType";

const NoAuthRouter: FC = () => {
    //tableau des routes
    const routesNoAuth: RouteType[] = [
        {path: "/", element: <HomePage/>},
    ]

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                {routesNoAuth.map((route:RouteType, index:number) => <Route key={index} path={route.path} element={route.element}/>)}
            </Route>
        </Routes>
    );
};

export default NoAuthRouter;