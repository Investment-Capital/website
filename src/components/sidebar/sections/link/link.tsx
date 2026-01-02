import routes from "../../../../config/routes";
import Route from "../../../../types/route";
import SidebarSection from "../../section";
import SidebarButton from "./sidebarButton";

type Props = {
  category: string;
};

const LinkSection = ({ category }: Props) => {
  const links = routes.filter(
    (route) => route.navigation?.category == category
  ) as Required<Route>[];

  return (
    <SidebarSection>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p style={{ fontSize: "14px", fontWeight: 600 }}>{category}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {links.map((link) => (
            <SidebarButton link={link} key={link.path} />
          ))}
        </div>
      </div>
    </SidebarSection>
  );
};

export default LinkSection;
