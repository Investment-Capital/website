import { Auth, Investors } from "investmentcapital.js";
import useAuthorization from "../../hooks/useAuthorization";
import Button from "../button";
import { useModals } from "../../hooks/useModals";
import LoginModal from "../../modals/login";
import { useCurrentInvestorCache } from "../../hooks/cache/useCurrentInvestorCache";
import colors from "../../config/colors";

const Navbar = () => {
  const [authorization] = useAuthorization();
  const currentInvestor = useCurrentInvestorCache();
  const modals = useModals();

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: colors.dark.secondary(),
        width: "100%",
        padding: "12px",
        height: "45px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {currentInvestor !== undefined && `cash: ${currentInvestor?.cash}`}
      {authorization ? (
        <img
          style={{ height: "50px" }}
          src={Investors.icon(Auth.investorId(authorization))}
        />
      ) : (
        <Button text="Login" onClick={() => modals?.add(LoginModal)} />
      )}
    </div>
  );
};

export default Navbar;
