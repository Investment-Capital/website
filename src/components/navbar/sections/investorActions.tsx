import { Bell, Crown, Star } from "lucide-react";
import useLayout from "../../../hooks/useLayout";
import useAuthorization from "../../../hooks/useAuthorization";
import { Auth, Investors } from "investmentcapital.js";
import { useNavigate } from "react-router";

const InvestorActionsSection = () => {
  const [authorization] = useAuthorization();
  const layout = useLayout();
  const navigate = useNavigate();

  return (
    authorization && (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "9px" }}>
          <Crown />
          <Star />
          <Bell />
        </div>
        <img
          style={{
            height: layout.navbar.height,
            width: layout.navbar.height,
            cursor: "pointer",
          }}
          onClick={() =>
            navigate(`/investor/${Auth.investorId(authorization)}`)
          }
          src={Investors.icon(Auth.investorId(authorization))}
          alt="Investor's Avatar"
        />
      </div>
    )
  );
};

export default InvestorActionsSection;
