type Data = {
  children: React.ReactNode;
};

const InfomationContainer = ({ children }: Data): JSX.Element => {
  return (
    <div
      style={{
        padding: "28px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
};

export default InfomationContainer;
