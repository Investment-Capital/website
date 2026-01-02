import useAuthorization from "../../hooks/useAuthorization";
import Button from "../button";
import { useModals } from "../../hooks/useModals";
import LoginModal from "../../modals/login";
import colors from "../../config/colors";
import { useNavigate } from "react-router";
import logo from "../../assets/logo.webp";
import useLayout from "../../hooks/useLayout";
import { LogIn } from "lucide-react";
import InvestorActionsSection from "./sections/investorActions";
import SearchSection from "./sections/search/search";
import useMobile from "../../hooks/useMobile";
import routes from "../../config/routes";
import NavbarLink from "./link";
import Route from "../../types/route";
import fullLayout from "../../config/layout";

const Navbar = () => {
  const [authorization] = useAuthorization();
  const layout = useLayout();
  const navigate = useNavigate();
  const modals = useModals();
  const mobile = useMobile();

  return (
    <div
      style={{
        padding: `${layout.navbar.verticalPadding}px ${layout.navbar.horizontalPadding}px`,
        backgroundColor: colors.secondary(),
        position: "fixed",
        zIndex: 2,
      }}
    >
      <div
        style={{
          width: `calc(100vw - ${layout.navbar.horizontalPadding * 2}px)`,
          height: fullLayout.navbar.height.pc,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <img
          src={logo}
          style={{
            height: fullLayout.navbar.height.pc,
            width: fullLayout.navbar.height.pc,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
          alt="Investment Capital Logo"
        />

        {!mobile && <SearchSection />}

        {authorization ? (
          <InvestorActionsSection />
        ) : (
          <Button
            text="Login"
            onClick={() => modals?.add(LoginModal)}
            icon={LogIn}
          />
        )}
      </div>

      {mobile && (
        <div
          style={{
            height:
              fullLayout.navbar.height.mobile - fullLayout.navbar.height.pc,
            display: "flex",
            flexDirection: "row",
            overflow: "auto",
            alignItems: "center",
            justifyContent: "space-around",
            width: `calc(100vw - ${layout.navbar.horizontalPadding * 2}px)`,
          }}
        >
          {routes
            .filter((route) => route.navigation)
            .map((route) => (
              <NavbarLink key={route.path} route={route as Required<Route>} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
