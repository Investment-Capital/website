import colors from "../../config/colors";
import Container from "../../types/container";

const SidebarSection = ({ children }: Container) => {
  return (
    <div
      style={{
        padding: "12px",
        backgroundColor: colors.primary(),
        borderRadius: "9px",
        border: `1px solid ${colors.tertiary()}`,
      }}
    >
      {children}
    </div>
  );
};

export default SidebarSection;
