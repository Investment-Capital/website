import { useEffect, useState } from "react";
import navigationLinks from "../../config/navigationLinks";
import NavLogo from "./navLogo";
import NavLinks from "./navLinks";
import MenuIcon from "./menuIcon";

const useNavbar = () => {
  const [mobile, setMobile] = useState<boolean>(window.innerWidth <= 1200);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(
    window.scrollY !== 0
  );
  const [isDown, setIsDown] = useState<boolean>(window.scrollY !== 0);

  const leftLinks = navigationLinks.filter((link) => !link.right);
  const rightLinks = navigationLinks.filter((link) => link.right);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setMobile(window.innerWidth <= 1200)
    );

    window.addEventListener("scroll", () => setIsDown(window.scrollY !== 0));
  }, []);

  const elements = (
    <div
      style={{
        width: "100%",
        height: mobile ? "auto" : "75px",
      }}
    >
      <div
        style={{
          position: mobile ? "unset" : "fixed",
          width: "100%",
          zIndex: 100,
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
            transition: "background-color 0.2s, backdrop-filter 0.2s",
            backdropFilter: isDown && !mobile ? "blur(7px)" : "unset",
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
                <NavLogo mobile={mobile} />
                <NavLinks links={leftLinks} isMobile={mobile} />
              </>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            {mobile ? (
              <NavLogo mobile={mobile} />
            ) : (
              <NavLinks links={rightLinks.reverse()} isMobile={mobile} />
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
              "opacity 0.15s ease-in, transform 0.15s ease-in, max-height 0.15s ease-in",
          }}
        >
          <NavLinks isMobile={mobile} links={[...leftLinks, ...rightLinks]} />
        </div>
      )}
    </div>
  );

  return { elements, setMobileDropdownOpen };
};

export default useNavbar;
