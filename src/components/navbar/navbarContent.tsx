import { useLocation } from "react-router-dom";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import MenuIcon from "./menuIcon";
import NavLinks from "./navLinks";
import NavLogo from "./navLogo";
import UserIcon from "./userIcon";
import { useEffect, useState } from "react";
import NavigationLinks from "../../types/navigationLinks";
import Dropdown from "../dropdown";

type Data = {
  leftLinks: NavigationLinks[];
  rightLinks: NavigationLinks[];
};

const NavbarContent = ({ leftLinks, rightLinks }: Data) => {
  const mobile = useDeviceWidth((width) => width <= 1400);
  const location = useLocation();
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false);

  useEffect(() => setMobileDropdownOpen(false), [location]);

  return (
    <>
      {!mobile && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavLogo />
          <NavLinks links={leftLinks} />
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center" }}>
        {!mobile && <NavLinks links={rightLinks} />}
        <UserIcon />
      </div>

      {mobile && (
        <>
          <div>
            <MenuIcon
              open={mobileDropdownOpen}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            />

            <Dropdown
              links={[...leftLinks, ...rightLinks] as any}
              open={mobileDropdownOpen}
            />
          </div>

          <NavLogo />
        </>
      )}
    </>
  );
};

export default NavbarContent;
