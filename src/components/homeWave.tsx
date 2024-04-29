import EndingWave from "../public/endingWave";
import StartingWave from "../public/startingWave";

type Data = {
  children: React.ReactNode;
};

const HomeWave = ({ children }: Data) => {
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
