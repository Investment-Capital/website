import { Auth, Investors } from "investmentcapital.js";
import useAuthorization from "../../hooks/useAuthorization";
import Button from "../button";
import { useModals } from "../../hooks/useModals";
import LoginModal from "../../modals/login";
import { useCurrentInvestorCache } from "../../hooks/cache/useCurrentInvestorCache";
import colors from "../../config/colors";
import Number from "../number";
import { useNavigate } from "react-router";
import logo from "../../assets/logo.webp";
import useLayout from "../../hooks/useLayout";

const Navbar = () => {
  const [authorization] = useAuthorization();
  const layout = useLayout();
  const navigate = useNavigate();
  const currentInvestor = useCurrentInvestorCache();
  const modals = useModals();

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: colors.dark.secondary(),
        width: `calc(100vw - ${layout.navbar.padding * 2}px)`,
        padding: layout.navbar.padding,
        height: layout.navbar.height,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        zIndex: 2,
        justifyContent: "space-between",
      }}
    >
      <div>
        <img
          src={logo}
          style={{ height: layout.navbar.height, cursor: "pointer" }}
          onClick={() => navigate("/")}
          alt="Investment Capital Logo"
        />
      </div>
      <div>
        <input
          placeholder="Search other investors..."
          style={{ width: "30vw" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div>
          {authorization && (
            <Number value={currentInvestor?.cash ?? 0} currency />
          )}
        </div>

        {authorization ? (
          <img
            style={{ height: layout.navbar.height, cursor: "pointer" }}
            onClick={() =>
              navigate(`/investor/${Auth.investorId(authorization)}`)
            }
            src={Investors.icon(Auth.investorId(authorization))}
            alt="Investor's Avatar"
          />
        ) : (
          <Button text="Login" onClick={() => modals?.add(LoginModal)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
