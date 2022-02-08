
import { useRoutes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/login", element: <Login /> },
    { path: "/404", element: <NotFound /> },
    { path: "*", element:<Navigate to="/404" /> },
  ]);
};

export default Router;
