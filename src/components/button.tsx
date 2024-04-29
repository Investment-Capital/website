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
}: Data): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <button
      onClick={onClick}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={{
        ...{
          color: "white",
          borderRadius: "10px",
          borderWidth: "2px",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "1.35em",
          margin: "6px 4px",
          border: "none",
          padding: "15px 48px",
          cursor: "pointer",
          backgroundColor: color,
          boxShadow: hovered
            ? `${color} 0px 6px 16px 0px`
            : `${color} 0px 0px 0px 0px`,
          transition: "0.2s",
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
