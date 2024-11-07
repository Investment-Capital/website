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
import Login from "../pages/auth/login";
import Logout from "../pages/auth/logout";
import AccountProfile from "../pages/account/profile";
import Investor from "../pages/investor";
import leaderboards from "./leaderboards";

const routes: Route[] = [
  {
    paths: "/",
    element: <Home />,
    navigation: {
      name: "Home",
      right: false,
    },
  },
  {
    paths: "/commands",
    element: <Commands />,
    navigation: {
      name: "Commands",
      right: false,
    },
  },
  {
    paths: ["/lookup/investors"],
    element: <Lookup />,
    navigation: {
      name: "Lookup",
      link: "/lookup/investors",
      right: false,
    },
  },
  {
    paths: ["/market/stocks"],
    element: <Market />,
    navigation: {
      name: "Markets",
      link: "/market/stocks",
      right: false,
    },
  },
  {
    paths: "/lottery",
    element: <Lottery />,
    navigation: {
      name: "Lottery",
      right: false,
    },
  },
  {
    paths: Object.entries(leaderboards).flatMap(([type, leaderboards]) =>
      leaderboards.map((value) => `/leaderboard/${type}/${value}`)
    ),
    element: <Leaderboard />,
    navigation: {
      name: "Leaderboards",
      link: "/leaderboard/investors/cash",
      right: false,
    },
  },
  {
    paths: "/api",
    element: <API />,
    navigation: {
      name: "API",
      right: true,
    },
  },
  {
    paths: "/terms",
    element: <Terms />,
    navigation: {
      name: "Terms Of Service",
      right: true,
    },
  },
  {
    paths: "/privacy",
    element: <Privacy />,
    navigation: {
      name: "Privacy Policy",
      right: true,
    },
  },
  {
    paths: "/auth/login",
    element: <Login />,
  },
  {
    paths: "/auth/logout",
    element: <Logout />,
  },
  {
    paths: "/account/profile",
    element: <AccountProfile />,
    authorized: true,
  },
  {
    paths: "/investor/:id",
    element: <Investor />,
  },
  {
    paths: "*",
    element: <Navigate to={"/"} />,
  },
];

export default routes;
