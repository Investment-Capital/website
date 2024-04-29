import { useEffect, useState } from "react";
import navigationLinks from "../../config/navigationLinks";
import NavLogo from "./navLogo";
import NavLinks from "./navLinks";
import MenuIcon from "./menuIcon";

const useNavbar = () => {
  const [mobile, setMobile] = useState<boolean>(window.innerWidth <= 1200);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false);

  const leftLinks = navigationLinks.filter((link) => !link.right);
  const rightLinks = navigationLinks.filter((link) => link.right);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setMobile(window.innerWidth <= 1200)
    );
  }, []);

  const elements = (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: mobile ? "20px" : "10px",
          paddingTop: mobile ? "5px" : "15px",
          paddingBottom: mobile ? "0px" : "10px",
          flexDirection: "row",
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

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          {mobile ? (
            <NavLogo mobile={mobile} />
          ) : (
            <NavLinks links={rightLinks.reverse()} isMobile={mobile} />
          )}
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
            transform: "translateY(-10px)",
            overflow: "hidden",
            transition: "0.3s ease-in",
          }}
        >
          <NavLinks isMobile={mobile} links={[...leftLinks, ...rightLinks]} />
        </div>
      )}
    </>
  );

  return { elements, setMobileDropdownOpen };
};

export default useNavbar;
