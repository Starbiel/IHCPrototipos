import React, {lazy} from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout";

const Home = lazy(() => import("../pages/home"));

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                    
                }
            ],
        }
    ]
);

export default routes;