import {
  BookOpen,
  FileText,
  ShieldCheck,
  TrendingUp,
  Trophy,
} from "lucide-react";
import IndexPage from "../pages";
import MarketPage from "../pages/market";
import Route from "../types/route";
import { Navigate } from "react-router-dom";

const routes: Route[] = [
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/market",
    element: <MarketPage />,
    sidebar: {
      label: "Market",
      category: "Game",
      icon: <TrendingUp />,
    },
  },
  {
    path: "/leaderboard/:type",
    element: <div></div>,
    sidebar: {
      label: "Leaderboards",
      category: "Game",
      link: "/leaderboard/cash",
      icon: <Trophy />,
    },
  },
  {
    path: "/guide",
    element: <div></div>,
    sidebar: {
      label: "Guide",
      category: "Game",
      icon: <BookOpen />,
    },
  },
  {
    path: "/terms",
    element: <div></div>,
    sidebar: {
      label: "Terms",
      category: "Legal",
      icon: <FileText />,
    },
  },
  {
    path: "/privacy",
    element: <div></div>,
    sidebar: {
      label: "Privacy",
      category: "Legal",
      icon: <ShieldCheck />,
    },
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
