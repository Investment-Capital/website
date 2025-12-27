import colors from "../../config/colors";
import routes from "../../config/routes";
import useLayout from "../../hooks/useLayout";
import LinkSection from "./sections/link/link";
import NetworthSection from "./sections/networth";

const Sidebar = () => {
  const layout = useLayout();
  const linkCateories = routes
    .filter((route) => route.sidebar)
    .map((route) => route.sidebar?.category as string)
    .filter((category, index, self) => index == self.indexOf(category));

  return (
    <div
      style={{
        height: `calc(100vh - ${layout.content.heightOffset}px)`,
        position: "fixed",
        width: layout.sidebar.width,
        padding: layout.sidebar.padding,
        backgroundColor: colors.secondary(),
        paddingTop: layout.content.heightOffset,
        zIndex: 1,
        display: "flex",
        gap: "12px",
        flexDirection: "column",
      }}
    >
      <NetworthSection />
      {linkCateories.map((category) => (
        <LinkSection category={category} key={category} />
      ))}
    </div>
  );
};

export default Sidebar;
