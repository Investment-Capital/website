import useDeviceWidth from "../hooks/useDeviceWidth";
import useScrollY from "../hooks/useScrollY";

type Data = {
  children: React.ReactNode;
};

const NavbarContainer = ({ children }: Data): React.ReactNode => {
  const mobile = useDeviceWidth((width) => width <= 1400);
  const isDown = useScrollY((scroll) => scroll >= 7);

  return (
    <div
      style={{
        width: "100%",
        height: "75px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: isDown && !mobile ? "85%" : "100%",
          zIndex: 100,
          transition: "width 0.15s",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            paddingTop: mobile ? "3px" : "14px",
            paddingBottom: mobile ? "3px" : "14px",
            flexDirection: "row",
            backgroundColor: isDown ? `rgba(0,0,0, 0.8)` : "transparent",
            backdropFilter: isDown ? "blur(6px)" : "unset",
            borderRadius: mobile ? "0px" : "24px",
            margin: isDown && !mobile ? "14px" : undefined,
            transition: "background-color 0.15s, backdropFilter 0.15s",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavbarContainer;
