import { createBrowserRouter } from 'react-router-dom';
import HomeLayOut from "../LauOuts/HomeLayOut";
import Home from "../pages/Home";
import CatetoryNaws from "../pages/CatetoryNaws";


export const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayOut></HomeLayOut>,
            children : [
                {
                 path:'',
                 element:<Home></Home>,
                },
                {
                    path:'category/:id',
                    element:<CatetoryNaws></CatetoryNaws>,
                    loader:()=>fetch('/news.json')
                }
            ]
            
        },
         {
            path:'/auth',
            element: <h2>Authentication Layout</h2>
        },
         {
            path:'/news',
            element: <h2>news layouth</h2>
        },
         {
            path:'/*',
            element: <Error></Error>
        },
         

    ]
)