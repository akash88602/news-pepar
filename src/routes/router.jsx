import { createBrowserRouter } from 'react-router-dom';
import HomeLayOut from "../LauOuts/HomeLayOut";
import Home from "../pages/Home";
import CatetoryNaws from "../pages/CatetoryNaws";
import Login from '../pages/Login';
import AuthLoyout from '../LauOuts/AuthLoyout';
import Register from '../pages/Register';
import NewsDetails from '../pages/NewsDetails';


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayOut></HomeLayOut>,
            children: [
                {
                    path: '',
                    element: <Home></Home>,
                },
                {
                    path: 'category/:id',
                    element: <CatetoryNaws></CatetoryNaws>,
                    loader: () => fetch('/news.json')
                },
             
            ]

        },
           {
                    path: 'news-details/:id',
                    element: <NewsDetails></NewsDetails>,
                    loader: () => fetch('/news.json')


                },
        {
            path: '/auth',
            element: <AuthLoyout></AuthLoyout>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login></Login>
                },
                {
                    path: '/auth/register',
                    element: <Register></Register>,
                }
            ]
        },
        {
            path: '/news',
            element: <h2>news layouth</h2>
        },
        {
            path: '/*',
            element: <Error></Error>
        },


    ]
)