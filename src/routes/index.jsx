import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout";

const Home = lazy(() => import("../pages/home"));
const Sobre = lazy(() => import("../pages/about"));
const EaD = lazy(() => import("../pages/courses"));
const Equipe = lazy(() => import("../pages/team/equipe"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Carregando layout...</div>}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Carregando página inicial...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "sobre",
        element: (
          <Suspense fallback={<div>Carregando página sobre...</div>}>
            <Sobre />
          </Suspense>
        ),
      },
      {
        path: "cursos/EaD",
        element: (
          <Suspense fallback={<div>Carregando página cursos...</div>}>
            <EaD />
          </Suspense>
        ),
      },
      {
        path: "equipe",
        element: (
          <Suspense fallback={<div>Carregando página equipe...</div>}>
            <Equipe />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
