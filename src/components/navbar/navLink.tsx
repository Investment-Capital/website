import { useState } from "react";
import { useNavigate } from "react-router";
import NavigationLinks from "../../types/navigationLinks";

type Data = Required<Omit<NavigationLinks, "right">>;

const NavLink = ({ name, link }: Data): React.ReactNode => {
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const isCurrentPage =
    link?.toLowerCase().split("/")[1] ==
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
        transition: "color 0.2s, opacity 0.2s",
      }}
    >
      {name}
    </p>
  );
};

export default NavLink;
