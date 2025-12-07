import colors from "../config/colors";
import useHovered from "../hooks/useHovered";
import Color from "../types/color";

type Props = {
  text: string;
  color?: Color;
  onClick?: () => any;
};

const Button = ({ text, onClick, color = colors.dark.grey }: Props) => {
  const { hovered, bind } = useHovered();

  return (
    <button
      {...bind}
      style={{
        color: "white",
        borderRadius: "6px",
        border: "none",
        fontWeight: 600,
        fontSize: "15px",
        lineHeight: "1.35em",
        padding: "9px",
        cursor: "pointer",
        backgroundColor: color(hovered ? 1 : 0.7),
        transition: "0.25s",
      }}
      onClick={onClick}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
