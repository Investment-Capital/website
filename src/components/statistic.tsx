import NumberFlow from "@number-flow/react";
import Topography from "./topography";

type Data = {
  title: string;
  statisic: number | null;
};

const Statisic = ({ title, statisic }: Data): React.ReactNode => {
  return (
    <div
      style={{
        height: "200px",
        backgroundColor: "rgb(80,80,80, 0.5)",
        borderRadius: "6px",
        flexGrow: 1,
        textAlign: "center",
        width: "300px",
        position: "relative",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Topography opacity={0.2} />

      <div
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontSize: "30px",
            color: "white",
          }}
        >
          {title ?? "???"}
        </h3>
        <h5 style={{ fontSize: "35px", color: "#d88c2c" }}>
          {statisic ? <NumberFlow value={statisic} /> : "???"}
        </h5>
      </div>
    </div>
  );
};

export default Statisic;
