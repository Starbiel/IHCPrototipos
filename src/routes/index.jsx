import React, {lazy} from "react";
import { createBrowserRouter } from "react-router";

const Home = lazy(() => import("../pages/home"));

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        }
    ]
);

export default routes;