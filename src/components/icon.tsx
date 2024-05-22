import { useState } from "react";
import Redirect from "../functions/redirect";

type Data = {
  image: string;
  link: string;
  name: string;
};

const Icon = ({ image, link, name }: Data) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      style={{
        cursor: "pointer",
        padding: "15px",
        margin: "4px",
      }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <img
        style={{
          height: "45px",
          transition: "0.8s",
          transform: hovered ? "rotate(360deg)" : undefined,
          opacity: hovered ? 0.7 : undefined,
        }}
        src={image}
        alt={name}
        onClick={() => Redirect({ newTab: true, to: link })}
      />
    </div>
  );
};

export default Icon;
