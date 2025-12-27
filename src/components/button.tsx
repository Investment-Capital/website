import colors from "../config/colors";
import useHovered from "../hooks/useHovered";
import Color from "../types/color";

type Props = {
  text: string;
  icon?: React.ReactNode;
  color?: Color;
  onClick?: () => any;
};

const Button = ({ text, onClick, icon, color = colors.tertiary }: Props) => {
  const { hovered, bind } = useHovered();

  return (
    <button
      {...bind}
      style={{
        borderRadius: "9px",
        border: "none",
        fontWeight: 600,
        fontSize: "14px",
        padding: "9px",
        cursor: "pointer",
        backgroundColor: color(hovered ? 1 : 0.7),
        transition: "0.25s",
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
        color: "white",
      }}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
