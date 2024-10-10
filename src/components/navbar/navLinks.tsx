import NavigationLinks from "../../types/navigationLinks";
import NavLink from "./navLink";

type Data = {
  links: NavigationLinks[];
};

const NavLinks = ({ links }: Data): JSX.Element[] => {
  return links.map((link) => (
    <NavLink link={link.link ?? "/"} name={link.name} key={link.name} />
  ));
};

export default NavLinks;
