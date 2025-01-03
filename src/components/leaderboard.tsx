import ordinal from "ordinal";

type Data = {
  data: {
    position: number;
    name: string;
    image: string;
    value: number;
  }[];
};

const Leaderboard = ({ data }: Data) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(44, 47, 51)",
        width: "40rem",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {data.map((entry, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgb(55, 58, 64)",
            borderRadius: "6px",
            padding: "12px",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color:
                entry.position == 1
                  ? "rgb(216, 140, 44)"
                  : entry.position == 2
                  ? "#C0C0C0"
                  : entry.position == 3
                  ? "#CD7F32"
                  : "white",
              width: "4.5rem",
              marginLeft: "6px",
              textAlign: "left",
            }}
          >
            {ordinal(entry.position)}
          </div>

          <img
            src={entry.image}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              marginRight: "12px",
            }}
          />

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ color: "white" }}>{entry.name}</div>
            <div
              style={{
                color: "rgb(216, 140, 44)",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {entry.value.toLocaleString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
