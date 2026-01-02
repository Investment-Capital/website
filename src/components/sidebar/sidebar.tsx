import colors from "../../config/colors";
import routes from "../../config/routes";
import useLayout from "../../hooks/useLayout";
import LinkSection from "./sections/link/link";
import NetworthSection from "./sections/networth";

const Sidebar = () => {
  const layout = useLayout();
  const linkCateories = routes
    .filter((route) => route.navigation)
    .map((route) => route.navigation?.category as string)
    .filter((category, index, self) => index == self.indexOf(category));

  return (
    <div
      style={{
        height: `calc(100vh - ${layout.content.heightOffset}px - ${layout.sidebar.padding}px)`,
        position: "fixed",
        width: layout.sidebar.width,
        padding: layout.sidebar.padding,
        backgroundColor: colors.secondary(),
        paddingTop: layout.content.heightOffset,
        display: "flex",
        gap: "12px",
        flexDirection: "column",
        overflow: "auto",
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
