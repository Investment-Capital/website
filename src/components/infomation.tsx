import { useState } from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import InfomationData from "../types/infomationData";
import Topography from "./topography";

const Infomation = ({ title, text, link }: InfomationData): JSX.Element => {
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      style={{
        width: "18rem",
        background: "#1d1e28",
        borderRadius: "22px",
        margin: "15px",
        cursor: "pointer",
        transform: `scale(${hovered ? "102.5" : "100"}%)`,
        boxShadow: hovered ? `0px 8px 18px 0px #1d1e28` : "none",
        alignItems: "stretch",
        justifyContent: "flex-start",
        flexDirection: "column",
        display: "flex",
        position: "relative",
        transition: "0.2s",
        flexGrow: 1,
        maxWidth: "425px",
      }}
    >
      <Topography opacity={0.05} color="rgb(216, 140, 44)" />

      <div
        style={{
          textAlign: "left",
          padding: "40px 40px 20px 30px",
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
          marginBottom: "20px",
          width: "85%",
          alignSelf: "center",
          borderRadius: "4px",
          padding: "11px",
          fontSize: "15px",
          transition: "0.25s",
          boxShadow: "none",
        }}
        hoveredStyles={{
          backgroundColor: "rgb(80,80,80, 0.6)",
        }}
      />
    </div>
  );
};

export default Infomation;
