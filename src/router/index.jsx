import { createBrowserRouter } from "react-router-dom";

import { Producto } from "../pages/producto";
import LayoutPublic from "../layoutPublic/layoutPublic";
import Prestamos from "../pages/prestamos";
import { Blogs } from "../pages/blogs";
import { Debate } from "../pages/debate";
import { Profesores } from "../pages/profesores";
import Home from "../pages/home";


export const router = createBrowserRouter ([
    {
        path:'/',
        element: <LayoutPublic/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/producto',
                element: <Producto/>
            },
            {
                path: '/prestamos',
                element: <Prestamos/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/debate',
                element: <Debate/>
            },
            {
                path: '/profesores',
                element: <Profesores/>
            }
        ],
    },
 
])