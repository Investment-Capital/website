import { useState } from "react";

const useHovered = () => {
  const [hovered, setHovered] = useState(false);

  const bind = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  return { hovered, bind };
};

export default useHovered;
