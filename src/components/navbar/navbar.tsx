import NavbarContainer from "../../containers/navbarContainer";
import getNavigation from "../../functions/getNavigation";
import NavbarContent from "./navbarContent";

const Navbar = (): React.ReactNode => {
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
