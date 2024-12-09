import EndingWave from "../assets/endingWave";
import StartingWave from "../assets/startingWave";

type Data = {
  children: React.ReactNode;
};

const HomeWave = ({ children }: Data): React.ReactNode => {
  return (
    <div style={{ fontSize: "0", textAlign: "center" }}>
      <StartingWave />
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(216, 140, 44) , #fcb900)",
        }}
      >
        {children}
      </div>

      <EndingWave />
    </div>
  );
};

export default HomeWave;
