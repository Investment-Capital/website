import { useNavigate } from "react-router";
import useHovered from "../../../../hooks/useHovered";
import colors from "../../../../config/colors";
import { ChevronRight } from "lucide-react";

type Props = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

const SearchOption = ({ icon, title, description, link }: Props) => {
  const { hovered, bind } = useHovered();
  const navigate = useNavigate();

  return (
    <div
      {...bind}
      style={{
        cursor: "pointer",
        backgroundColor: hovered ? colors.secondary() : colors.primary(),
        transition: "0.25s",
        padding: "6px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onClick={() => navigate(link)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          alignItems: "center",
        }}
      >
        <img src={icon} style={{ height: "60px", width: "60px" }} />
        <div>
          <p style={{ fontWeight: 500 }}>{title}</p>
          <p
            style={{
              fontSize: "13px",
              color: colors.grey(0.8),
            }}
          >
            {description}
          </p>
        </div>
      </div>
      <ChevronRight size={35} />
    </div>
  );
};

export default SearchOption;
