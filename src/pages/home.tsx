import { useEffect, useState } from "react";
import Infomation from "../components/infomation";
import Button from "../components/button";
import Statisic from "../components/statistic";
import StatisicsData from "../types/statisicsData";
import StatisticContainer from "../containers/statisticContainer";
import InfomationContainer from "../containers/infomationContainer";
import Footer from "../components/footer";
import HomeWave from "../components/homeWave";
import infomationBoxes from "../config/infomationBoxes";
import redirect from "../functions/redirect";

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 800);

  const [statistics, setStatistics] = useState<StatisicsData>({
    investors: null,
    businesses: null,
    guilds: null,
  });

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth <= 800)
    );

    (async () => {
      const data = await fetch(import.meta.env.VITE_API_LINK + `/statistics`);
      if (data.ok) setStatistics(await data.json());
    })();
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
            Investment Capital is a economy bot ready to skill up and boost up
            your Discord server.
            <br />
            Features investment aspects including the stock market.
          </h4>
        </div>

        <div style={{ marginTop: "6px" }}>
          <Button
            color="#d88c2c"
            text="Add To Server"
            onClick={() => redirect(import.meta.env.VITE_BOT_INVITE)}
          />
          <Button
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

      <StatisticContainer>
        <Statisic title="Investors" statisic={statistics.investors} />
        <Statisic title="Businesses" statisic={statistics.businesses} />
        <Statisic title="Guilds" statisic={statistics.guilds} />
      </StatisticContainer>

      <div
        style={{
          padding: "55px",
          paddingTop: "100px",
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
            color: "grey",
            padding: "3px",
          }}
        >
          Invite Investment Capital and start giving your server cool perks!
        </h4>

        <Button
          color="#d88c2c"
          text="Invite"
          onClick={() => redirect(import.meta.env.VITE_BOT_INVITE)}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
