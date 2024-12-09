type Data = {
  onClick: () => any;
  open: boolean;
};

const MenuIcon = ({ onClick, open }: Data): React.ReactNode => {
  return (
    <div
      style={{
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {new Array(3).fill("").map((_, index) => (
        <div
          key={index}
          style={{
            width: "30px",
            height: "4px",
            backgroundColor: "#fff",
            margin: "6px",
            transition: "0.4s",
            borderRadius: "4px",
            opacity: index == 1 && open ? 0 : undefined,
            transform:
              (index == 0 || index == 2) && open
                ? `rotate(${index == 0 ? "-" : ""}45deg) translate(-7px, ${
                    index == 2 ? "-" : ""
                  }7px)`
                : undefined,
          }}
        />
      ))}
    </div>
  );
};

export default MenuIcon;
