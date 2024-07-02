import { Navigate } from "react-router-dom";
import API from "../pages/api";
import Commands from "../pages/commands";
import Home from "../pages/home";
import Leaderboard from "../pages/leaderboard";
import Lookup from "../pages/lookup";
import Lottery from "../pages/lottery";
import Market from "../pages/market";
import Privacy from "../pages/privacy";
import Terms from "../pages/terms";
import Route from "../types/route";

const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
    navigation: {
      name: "Home",
      right: false,
    },
  },
  {
    path: "/commands",
    element: <Commands />,
    navigation: {
      name: "Commands",
      right: false,
    },
  },
  {
    path: "/lookup/:type",
    element: <Lookup />,
    navigation: {
      name: "Lookup",
      link: "/lookup/users",
      right: false,
    },
  },
  {
    path: "/market/:type",
    element: <Market />,
    navigation: {
      name: "Markets",
      link: "/market/stocks",
      right: false,
    },
  },
  {
    path: "/lottery",
    element: <Lottery />,
    navigation: {
      name: "Lottery",
      right: false,
    },
  },
  {
    path: "/leaderboard/:type",
    element: <Leaderboard />,
    navigation: {
      name: "Leaderboards",
      link: "/leaderboard/cash",
      right: false,
    },
  },
  {
    path: "/api",
    element: <API />,
    navigation: {
      name: "API",
      right: true,
    },
  },
  {
    path: "/terms",
    element: <Terms />,
    navigation: {
      name: "Terms Of Service",
      right: true,
    },
  },
  {
    path: "/privacy",
    element: <Privacy />,
    navigation: {
      name: "Privacy Policy",
      right: true,
    },
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
];

export default routes;
