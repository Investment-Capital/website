import NavigationLinks from "../../types/navigationLinks";
import NavLink from "./navLink";

type Data = {
  links: Omit<NavigationLinks, "right">[];
};

const NavLinks = ({ links }: Data): React.ReactNode[] => {
  return links.map((link) => (
    <NavLink link={link.link ?? "/"} name={link.name} key={link.name} />
  ));
};

export default NavLinks;
