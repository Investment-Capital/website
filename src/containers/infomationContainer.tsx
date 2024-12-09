import useDeviceWidth from "../hooks/useDeviceWidth";

type Data = {
  children: React.ReactNode;
};

const InfomationContainer = ({ children }: Data): React.ReactNode => {
  const isMobile = useDeviceWidth((width) => width <= 800);

  return (
    <div
      style={{
        paddingBottom: "20px",
        paddingTop: "30px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        paddingRight: isMobile ? "30px" : "55px",
        paddingLeft: isMobile ? "30px" : "55px",
        gap: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default InfomationContainer;
