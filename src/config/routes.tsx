import IndexPage from "../pages";
import MarketPage from "../pages/market";
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
    path: "*",
    element: () => <Navigate to="/" />,
  },
];

export default routes;
