import EndWave from "../public/footerWave.tsx";
import github from "../public/github.png";
import discord from "../public/discord.png";
import Icon from "./icon.tsx";

const Footer = (): JSX.Element => {
  return (
    <div>
      <div style={{ fontSize: 0 }}>
        <EndWave />
      </div>
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
