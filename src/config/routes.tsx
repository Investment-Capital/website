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
    sidebar: {
      label: "Market",
      category: "Investing",
      icon: "",
    },
  },
  {
    path: "/lookup",
    element: () => <div></div>,
    sidebar: {
      label: "Lookup",
      category: "Infomation",
      icon: "",
    },
  },
  {
    path: "/terms",
    element: () => <div></div>,
    sidebar: {
      label: "Terms",
      category: "Legal",
      icon: "",
    },
  },
  {
    path: "/privacy",
    element: () => <div></div>,
    sidebar: {
      label: "Privacy",
      category: "Legal",
      icon: "",
    },
  },
  {
    path: "*",
    element: () => <Navigate to="/" />,
  },
];

export default routes;
