import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../LauOuts/HomeLayOut";
import Home from "../pages/Home";
import CatetoryNaws from "../pages/CatetoryNaws";
import Login from "../pages/Login";
import AuthLoyout from "../LauOuts/AuthLoyout";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import ProviderRouter from "../provider/ProviderRouter";
import Loading from "../pages/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <CatetoryNaws />,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement :<Loading></Loading>,
      },
      
    ],
  },
  {
        path: "news-details/:id",
        element: <ProviderRouter>
          <NewsDetails />
        </ProviderRouter>,
        loader: () => fetch("/news.json"),
         hydrateFallbackElement :<Loading></Loading>,
      },
  {
    path: "/auth",
    element: <AuthLoyout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <h2>404 | Page Not Found</h2>,
  },
]);
