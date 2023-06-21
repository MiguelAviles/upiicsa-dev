import { createBrowserRouter } from "react-router-dom";

import { Producto } from "../pages/producto";
import App from "../App";
import LayoutPublic from "../layoutPublic/layoutPublic";



export const router = createBrowserRouter ([
    {
        path:'/',
        element: <LayoutPublic/>,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: '/producto',
                element: <Producto/>
            }
        ],
    },
 
])