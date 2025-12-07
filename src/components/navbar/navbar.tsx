import { Auth, Investors } from "investmentcapital.js";
import useAuthorization from "../../hooks/useAuthorization";

const Navbar = () => {
  const [authorization] = useAuthorization();

  if (authorization == undefined) return <div>not logged in</div>;
  const id = Auth.investorId(authorization);

  return (
    <div>
      <img style={{ height: "100px" }} src={Investors.icon(id)} />
    </div>
  );
};

export default Navbar;
