import EndWave from "../assets/footerWave.tsx";
import github from "../assets/github.png";
import discord from "../assets/discord.png";
import Icon from "./icon.tsx";

const Footer = (): React.ReactNode => {
  return (
    <div style={{ fontSize: 0 }}>
      <EndWave />
      <div
        style={{
          backgroundColor: "#4c4c4c",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "12px",
        }}
      >
        <Icon image={github} link={import.meta.env.VITE_GITHUB} name="Github" />
        <Icon
          image={discord}
          link={import.meta.env.VITE_SUPPORT_SERVER}
          name="Github"
        />
      </div>
    </div>
  );
};

export default Footer;
