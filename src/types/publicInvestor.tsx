import Investor from "./investor";

type PublicInvestor = Omit<Investor, "authorization" | "blacklist">;

export default PublicInvestor;
