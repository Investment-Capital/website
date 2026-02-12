import { Crown, Search, Settings, Star } from "lucide-react";
import useAuthorization from "../../../hooks/useAuthorization";
import { Auth, Investors } from "investmentcapital.js";
import { useNavigate } from "react-router";
import { useModals } from "../../../hooks/useModals";
import PrestigeModal from "../../../modals/prestige";
import SettingsModal from "../../../modals/settings";
import LevelModal from "../../../modals/level";
import layout from "../../../config/layout";
import useMobile from "../../../hooks/useMobile";
import SearchModal from "../../../modals/search";

const InvestorActionsSection = () => {
  const modals = useModals();
  const mobile = useMobile();
  const [authorization] = useAuthorization();
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
          {mobile && (
            <Search
              style={{
                cursor: "pointer",
              }}
              onClick={() => modals?.add(SearchModal)}
            />
          )}
          <Crown
            style={{
              cursor: "pointer",
            }}
            onClick={() => modals?.add(PrestigeModal)}
          />
          <Star
            style={{
              cursor: "pointer",
            }}
            onClick={() => modals?.add(LevelModal)}
          />
          <Settings
            style={{
              cursor: "pointer",
            }}
            onClick={() => modals?.add(SettingsModal)}
          />
        </div>
        <img
          style={{
            height: layout.navbar.height.pc,
            width: layout.navbar.height.pc,
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
