type Data = {
  children: React.ReactNode;
};

const StatisticContainer = ({ children }: Data): React.ReactNode => {
  return (
    <div
      style={{
        paddingTop: 0,
        display: "flex",
        flexWrap: "wrap",
        gap: "18px",
      }}
    >
      {children}
    </div>
  );
};

export default StatisticContainer;
