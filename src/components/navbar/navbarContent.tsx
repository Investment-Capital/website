import { useLocation } from "react-router";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import MenuIcon from "./menuIcon";
import NavLinks from "./navLinks";
import NavLogo from "./navLogo";
import UserIcon from "./userIcon";
import { useEffect, useState } from "react";
import NavigationLinks from "../../types/navigationLinks";
import NavDropdown from "./navDropdown";

type Data = {
  leftLinks: Required<NavigationLinks>[];
  rightLinks: Required<NavigationLinks>[];
};

const NavbarContent = ({ leftLinks, rightLinks }: Data): React.ReactNode => {
  const mobile = useDeviceWidth((width) => width <= 1400);
  const location = useLocation();
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false);

  useEffect(() => setMobileDropdownOpen(false), [location]);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavLogo />
        {!mobile && <NavLinks links={leftLinks} />}
      </div>

      {mobile && (
        <div>
          <MenuIcon
            open={mobileDropdownOpen}
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          />

          <NavDropdown
            links={[...leftLinks, ...rightLinks]}
            open={mobileDropdownOpen}
          />
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center" }}>
        {!mobile && <NavLinks links={rightLinks} />}
        <UserIcon />
      </div>
    </>
  );
};

export default NavbarContent;
