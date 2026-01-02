import { useMatch, useNavigate } from "react-router";
import useHovered from "../../../../hooks/useHovered";
import Route from "../../../../types/route";
import colors from "../../../../config/colors";
import { ChevronRight } from "lucide-react";

type Props = {
  link: Required<Route>;
};

const SidebarButton = ({ link }: Props) => {
  const { bind, hovered } = useHovered();
  const match = useMatch(link.path);
  const navigate = useNavigate();

  return (
    <div
      {...bind}
      onClick={() => navigate(link.navigation?.link ?? link.path)}
      style={{
        padding: "9px",
        backgroundColor: colors.tertiary(match || hovered ? 0.7 : 0),
        borderRadius: "9px",
        cursor: match ? "not-allowed" : "pointer",
        display: "flex",
        justifyContent: "space-between",
        transition: "0.25s",
        color: match ? "white" : colors.grey(),
      }}
    >
      <div
        style={{
          fontWeight: 500,
          display: "flex",
          gap: "9px",
        }}
      >
        <link.navigation.icon />
        <p>{link.navigation.label}</p>
      </div>
      <ChevronRight />
    </div>
  );
};

export default SidebarButton;
