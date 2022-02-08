
import { useRoutes } from "react-router-dom";
import Demo from "../pages/Demo";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/demo", element: <Demo /> },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default Router;
