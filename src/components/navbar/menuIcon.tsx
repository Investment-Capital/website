type Data = {
  setMobileDropdownOpen: (state: boolean) => any;
  mobileDropdownOpen: boolean;
};

const MenuIcon = ({ setMobileDropdownOpen, mobileDropdownOpen }: Data) => {
  return (
    <div
      style={{
        display: "inline-block",
        cursor: "pointer",
      }}
      className={`mobileNav-${mobileDropdownOpen ? "open" : "closed"}`}
      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
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

            opacity: index == 1 && mobileDropdownOpen ? 0 : undefined,
            transform:
              (index == 0 || index == 2) && mobileDropdownOpen
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
