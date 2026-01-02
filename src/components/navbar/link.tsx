import { useMatch, useNavigate } from "react-router";
import colors from "../../config/colors";
import Route from "../../types/route";
import Button from "../button";

type Props = {
  route: Required<Route>;
};

const NavbarLink = ({ route }: Props) => {
  const match = useMatch(route.path);
  const navigate = useNavigate();

  return (
    <Button
      backgroundColor={colors.secondary}
      color={match ? colors.white : colors.grey}
      text={route.navigation.label}
      icon={route.navigation.icon}
      onClick={() => navigate(route.navigation.link ?? route.path)}
    />
  );
};

export default NavbarLink;
