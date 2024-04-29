type Data = {
  children: React.ReactNode;
};

const StatisticContainer = ({ children }: Data): JSX.Element => {
  return (
    <div style={{ padding: "5px", textAlign: "center", paddingTop: 0 }}>
      {children}
    </div>
  );
};

export default StatisticContainer;
