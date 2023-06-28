import { createBrowserRouter } from "react-router-dom";

import { Producto } from "../pages/producto";
import LayoutPublic from "../layoutPublic/layoutPublic";
import Prestamos from "../pages/prestamos";
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
            }
        ],
    },
 
])