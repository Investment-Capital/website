import { useEffect, useState } from "react";
import Infomation from "../components/infomation";
import Statisic from "../components/statistic";
import StatisicsData from "../types/statisicsData";
import StatisticContainer from "../containers/statisticContainer";
import InfomationContainer from "../containers/infomationContainer";
import Footer from "../components/footer";
import HomeWave from "../components/homeWave";
import infomationBoxes from "../config/infomationBoxes";
import redirect from "../functions/redirect";
import useDeviceWidth from "../hooks/useDeviceWidth";
import useFetchApi from "../hooks/useFetchApi";
import ShadowButton from "../components/buttons/shadowButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isMobile = useDeviceWidth((width) => width <= 800);
  const fetchApi = useFetchApi();
  const navigate = useNavigate();

  const [statistics, setStatistics] = useState<StatisicsData>({
    investors: null,
    businesses: null,
    guilds: null,
  });

  useEffect(() => {
    fetchApi("/statistics").then(setStatistics);
  }, []);

  return (
    <>
      <div
        style={{
          padding: "55px",
          paddingBottom: "10px",
        }}
      >
        <div>
          <h1
            style={{
              padding: "3px",
              color: "white",
            }}
          >
            It's time to add investment capital to your server.
          </h1>

          <h4
            style={{
              color: "rgba(255, 255, 255, 0.50)",
              fontFamily: `"Lato",  sans-serif`,
              padding: "3px",
            }}
          >
            Investment Capital is a economy system ready to skill up and boost
            up your Discord server.
            <br />
            Features investment aspects including the stock market.
          </h4>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "6px",
          }}
        >
          <ShadowButton
            color="#d88c2c"
            text="Add To Server"
            onClick={() => redirect(import.meta.env.VITE_BOT_INVITE)}
          />

          <ShadowButton
            color="#2c2f33"
            text="Join Support Server"
            onClick={() => redirect(import.meta.env.VITE_SUPPORT_SERVER)}
          />
        </div>
      </div>
      <HomeWave>
        <div>
          <h1
            style={{
              fontSize: "44px",
            }}
          >
            <b
              style={{
                borderBottom: "solid 0.2em",
                borderRadius: "8px",
                color: "rgb(29, 30, 40)",
              }}
            >
              {isMobile ? "Features" : "Features Of Investment Capital"}
            </b>
          </h1>
        </div>

        <InfomationContainer>
          {infomationBoxes.map((infomation) => (
            <Infomation {...infomation} key={infomation.title} />
          ))}
        </InfomationContainer>
      </HomeWave>

      <div
        style={{
          padding: "20px 55px",
        }}
      >
        <h1
          style={{
            padding: "3px",
            color: "white",
          }}
        >
          Ready to try Investment Capital?
        </h1>
        <h4
          style={{
            color: "rgba(255, 255, 255, 0.50)",
            fontFamily: `"Lato",  sans-serif`,
            padding: "3px",
          }}
        >
          Invite Investment Capital and start giving your server cool perks!
        </h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "6px",
          }}
        >
          <ShadowButton
            color="#d88c2c"
            text="Add to server"
            onClick={() => redirect(import.meta.env.VITE_BOT_INVITE)}
          />
          <ShadowButton
            color="#2c2f33"
            text="Login"
            onClick={() => navigate("/auth/login")}
          />
        </div>
      </div>
      <div
        style={{
          paddingTop: "55px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center", margin: "0px 30px" }}>
          We're growing, and so can your server!
        </h1>
        <StatisticContainer>
          <Statisic title="Investors" statisic={statistics.investors} />
          <Statisic title="Businesses" statisic={statistics.businesses} />
          <Statisic title="Guilds" statisic={statistics.guilds} />
        </StatisticContainer>
      </div>

      <Footer />
    </>
  );
};

export default Home;
