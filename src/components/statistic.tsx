type Data = {
  title: string | null;
  statisic: number | null;
};

const Statisic = ({ title, statisic }: Data): JSX.Element => {
  return (
    <div
      style={{
        height: "fit-content",
        alignSelf: "flex-end",
        display: "inline-block",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "60px",
          paddingTop: 0,
        }}
      >
        <h5 style={{ fontSize: "40px", color: "#d88c2c" }}>
          {statisic ?? "???"}
        </h5>
        <p
          style={{
            fontSize: "20px",
            color: "white",
          }}
        >
          {title ?? "???"}
        </p>
      </div>
    </div>
  );
};

export default Statisic;
