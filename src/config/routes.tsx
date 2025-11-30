import IndexPage from "../pages";
import LoginPage from "../pages/login";
import LogoutPage from "../pages/logout";
import MarketPage from "../pages/market";
import SignupPage from "../pages/signUp";
import Route from "../types/route";
import { Navigate } from "react-router-dom";

const routes: Route[] = [
  {
    path: "/",
    element: IndexPage,
  },
  {
    path: "/market",
    element: MarketPage,
  },
  {
    path: "/login",
    element: LoginPage,
  },
  {
    path: "/signup",
    element: SignupPage,
  },
  {
    path: "/logout",
    element: LogoutPage,
  },
  {
    path: "*",
    element: () => <Navigate to="/" />,
  },
];

export default routes;
