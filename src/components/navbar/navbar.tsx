import { useEffect, useState } from "react";
import NavLogo from "./navLogo";
import NavLinks from "./navLinks";
import MenuIcon from "./menuIcon";
import { useLocation } from "react-router-dom";
import routes from "../../config/routes";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import useScrollY from "../../hooks/useScrollY";

const Navbar = () => {
  const location = useLocation();
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false);

  const mobile = useDeviceWidth((width) => width <= 1400);
  const isDown = useScrollY((scroll) => scroll !== 0);

  const leftLinks = routes
    .filter((e) => e.navigation && !e.navigation.right)
    .map((e) => {
      if (!e.navigation) throw new Error("Navigation not found");
      if (!e.navigation?.link) e.navigation.link = e.path;

      return e.navigation;
    });

  const rightLinks = routes
    .filter((e) => e.navigation && e.navigation.right)
    .map((e) => {
      if (!e.navigation) throw new Error("Navigation not found");
      if (!e.navigation?.link) e.navigation.link = e.path;

      return e.navigation;
    });

  useEffect(() => setMobileDropdownOpen(false), [location]);

  return (
    <div
      style={{
        width: "100%",
        height: mobile ? "auto" : "75px",
        display: !mobile ? "flex" : undefined,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: mobile ? "unset" : "fixed",
          width: isDown && !mobile ? "85%" : "100%",
          zIndex: 100,
          transition: mobile ? undefined : "width 0.15s",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            paddingTop: mobile ? "5px" : "14px",
            paddingBottom: mobile ? "0px" : "14px",
            flexDirection: "row",
            backgroundColor:
              isDown && !mobile
                ? `rgba(0,0,0, ${mobile ? "1" : "0.8"})`
                : "transparent",
            backdropFilter: isDown && !mobile ? "blur(6px)" : "unset",
            borderRadius: "24px",
            margin: isDown && !mobile ? "14px" : undefined,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {mobile ? (
              <MenuIcon
                setMobileDropdownOpen={setMobileDropdownOpen}
                mobileDropdownOpen={mobileDropdownOpen}
              />
            ) : (
              <>
                <NavLogo mobile={false} />
                <NavLinks links={leftLinks} isMobile={false} />
              </>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            {mobile ? (
              <NavLogo mobile={true} />
            ) : (
              <NavLinks links={rightLinks.reverse()} isMobile={false} />
            )}
          </div>
        </div>
      </div>

      {mobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "30px",
            opacity: mobileDropdownOpen ? 1 : 0,
            maxHeight: mobileDropdownOpen ? "340px" : 0,
            transform: mobileDropdownOpen
              ? "translateY(0)"
              : "translateY(-10px)",
            overflow: "hidden",
            transition:
              "opacity 0.3s ease-in, transform 0.3s ease-in, max-height 0.3s ease-in",
          }}
        >
          <NavLinks isMobile={true} links={[...leftLinks, ...rightLinks]} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
