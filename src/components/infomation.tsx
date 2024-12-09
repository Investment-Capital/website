import { useState } from "react";
import Button from "./buttons/button";
import { useNavigate } from "react-router";
import InfomationData from "../types/infomationData";
import Topography from "./topography";

const Infomation = ({ title, text, link }: InfomationData): React.ReactNode => {
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={{
        width: "16rem",
        background: "#1d1e28",
        borderRadius: "22px",
        cursor: "pointer",
        transform: `scale(${hovered ? "102.5" : "100"}%)`,
        boxShadow: hovered ? `0px 8px 18px 0px #1d1e28` : "none",
        alignItems: "stretch",
        flexDirection: "column",
        display: "flex",
        position: "relative",
        transition: "0.2s",
        flexGrow: 1,
        maxWidth: "425px",
        padding: "26px",
        gap: "6px",
        zIndex: 2,
      }}
    >
      <Topography opacity={0.05} color="rgb(216, 140, 44)" />
      <div
        style={{
          textAlign: "left",
        }}
      >
        <h5
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#d88c2c",
          }}
        >
          {title}
        </h5>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "20px",
          }}
        >
          {text}
        </p>
      </div>
      <Button
        color="rgb(80,80,80, 0.4)"
        text={`View ` + title}
        onClick={() => navigate(link)}
        styles={{
          marginTop: "auto",
          alignSelf: "center",
          width: "100%",
        }}
        hoveredStyles={{
          backgroundColor: "rgb(80,80,80, 0.6)",
        }}
      />
    </div>
  );
};

export default Infomation;
