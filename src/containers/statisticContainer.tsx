type Data = {
  children: React.ReactNode;
};

const StatisticContainer = ({ children }: Data): JSX.Element => {
  return (
    <div
      style={{
        padding: "5px",
        paddingTop: 0,
        display: "flex",
        flexWrap: "wrap",
        gap: "18px",
        margin: "0px 30px",
      }}
    >
      {children}
    </div>
  );
};

export default StatisticContainer;
