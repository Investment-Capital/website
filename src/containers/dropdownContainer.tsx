type Data = {
  children: React.ReactNode;
  open: boolean;
};

const DropdownContainer = ({ children, open }: Data): React.ReactNode => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          marginTop: "12px",
          opacity: open ? 1 : 0,
          maxHeight: open ? "340px" : 0,
          transform: open ? "translateY(0)" : "translateY(-10px)",
          transition:
            "opacity 0.1s ease-in, transform 0.15s ease-in, max-height 0.25s ease-in",
          backgroundColor: `rgba(0,0,0, 0.85)`,
          backdropFilter: "blur(6px)",
          overflow: "hidden",
          padding: "16px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownContainer;
