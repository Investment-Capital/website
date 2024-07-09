import NavbarContainer from "../../containers/navbarContainer";
import getNavigation from "../../functions/getNavigation";
import NavbarContent from "./navbarContent";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent
        leftLinks={getNavigation((navigation) => !navigation.right)}
        rightLinks={getNavigation((navigation) => navigation.right)}
      />
    </NavbarContainer>
  );
};

export default Navbar;
