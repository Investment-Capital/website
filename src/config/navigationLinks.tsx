import NavigationLinks from "../types/navigationLinks";

const navigationLinks: NavigationLinks[] = [
  { name: "Home", link: "/", right: false },
  { name: "Commands", link: "/commands", right: false },
  { name: "Lookup", link: "/lookup/users", right: false },
  { name: "Markets", link: "/market/stocks", right: false },
  { name: "Lottery", link: "/lottery", right: false },
  { name: "Leaderboards", link: "/leaderboard/cash", right: false },
  { name: "Terms Of Service", link: "/terms", right: true },
  { name: "Privacy Policy", link: "/privacy", right: true },
];

export default navigationLinks;
