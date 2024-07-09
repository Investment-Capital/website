import useDeviceWidth from "../hooks/useDeviceWidth";
import useScrollY from "../hooks/useScrollY";

type Data = {
  children: React.ReactNode;
};

const NavbarContainer = ({ children }: Data) => {
  const mobile = useDeviceWidth((width) => width <= 1400);
  const isDown = useScrollY((scroll) => scroll !== 0);

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
              isDown && !mobile ? `rgba(0,0,0, 0.8)` : "transparent",
            backdropFilter: isDown && !mobile ? "blur(6px)" : "unset",
            borderRadius: "24px",
            margin: isDown && !mobile ? "14px" : undefined,
          }}
        >
          {children}
        </div>{" "}
      </div>
    </div>
  );
};

export default NavbarContainer;
