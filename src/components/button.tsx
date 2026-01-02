import { LucideIcon } from "lucide-react";
import colors from "../config/colors";
import useHovered from "../hooks/useHovered";
import Color from "../types/color";

type Props = {
  text: string;
  icon?: LucideIcon;
  backgroundColor?: Color;
  color?: Color;
  onClick?: () => any;
};

const Button = ({
  text,
  onClick,
  icon: Icon,
  backgroundColor = colors.tertiary,
  color = colors.white,
}: Props) => {
  const { hovered, bind } = useHovered();

  return (
    <button
      {...bind}
      style={{
        borderRadius: "9px",
        border: "none",
        fontWeight: 600,
        fontSize: "14px",
        padding: "8px",
        cursor: "pointer",
        backgroundColor: backgroundColor(hovered ? 1 : 0.7),
        transition: "0.25s",
        display: "flex",
        flexDirection: "row",
        gap: "6px",
        alignItems: "center",
        color: color(),
      }}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
