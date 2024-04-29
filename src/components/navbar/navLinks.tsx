import NavigationLinks from "../../types/navigationLinks";
import NavLink from "./navLink";

type Data = {
  isMobile: boolean;
  links: NavigationLinks[];
};

const NavLinks = ({ links, isMobile }: Data) => {
  return links.map((link) => (
    <NavLink
      link={link.link}
      name={link.name}
      key={link.name}
      isMobile={isMobile}
    />
  ));
};

export default NavLinks;
