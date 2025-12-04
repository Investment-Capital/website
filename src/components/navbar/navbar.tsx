import { useCurrentInvestorCache } from "../../hooks/cache/useCurrentInvestorCache";

const Navbar = () => {
  const investor = useCurrentInvestorCache();

  if (investor == null) return <div>loading</div>;
  if (investor == undefined) return <div>not logged in</div>;

  return <div>{investor.account.profile.username}</div>;
};

export default Navbar;
