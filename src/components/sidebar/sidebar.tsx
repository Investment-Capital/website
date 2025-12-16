import colors from "../../config/colors";
import useLayout from "../../hooks/useLayout";

const Sidebar = () => {
  const layout = useLayout();
  return (
    <div
      style={{
        height: `calc(100vh - ${layout.content.heightOffset}px)`,
        position: "fixed",
        width: layout.sidebar.width,
        padding: layout.sidebar.padding,
        backgroundColor: colors.dark.secondary(),
        paddingTop: layout.content.heightOffset,
        zIndex: 1,
      }}
    ></div>
  );
};

export default Sidebar;
