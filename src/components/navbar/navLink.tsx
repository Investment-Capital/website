import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Data = {
  name: string;
  link: string;
  isMobile: boolean;
};

const NavLink = ({ name, link, isMobile }: Data): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);

  const navigate = useNavigate();
  const isCurrentPage =
    link.toLowerCase().split("/")[1] ==
    window.location.pathname.toLowerCase().split("/")[1];

  return (
    <p
      onClick={() => !isCurrentPage && navigate(link)}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={{
        color: isCurrentPage ? "#d88c2c" : "white",
        cursor: isCurrentPage ? "not-allowed" : "pointer",
        margin: "0 10px",
        opacity: !isCurrentPage && hovered ? 0.7 : undefined,
        transition: "0.2s",
        padding: isMobile ? "4.5px" : undefined,
      }}
    >
      {name}
    </p>
  );
};

export default NavLink;
