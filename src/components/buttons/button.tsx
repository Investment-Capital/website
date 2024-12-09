import { CSSProperties, useState } from "react";

type Data = {
  color: string;
  text: string;
  onClick: () => void;
  styles?: CSSProperties;
  hoveredStyles?: CSSProperties;
};

const Button = ({
  color,
  onClick,
  text,
  styles,
  hoveredStyles,
}: Data): React.ReactNode => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <button
      onClick={onClick}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={{
        ...{
          color: "white",
          borderRadius: "4px",
          borderWidth: "2px",
          fontWeight: 600,
          fontSize: "15px",
          lineHeight: "1.35em",
          border: "none",
          padding: "9px",
          cursor: "pointer",
          backgroundColor: color,
          transition: "0.25s",
        },

        ...styles,
        ...(hovered && hoveredStyles),
      }}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
