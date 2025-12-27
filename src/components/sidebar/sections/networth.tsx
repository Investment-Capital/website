import colors from "../../../config/colors";
import calculateNetworth from "../../../functions/calculateNetworth";
import { useCurrentInvestorCache } from "../../../hooks/cache/useCurrentInvestorCache";
import { useStocksCache } from "../../../hooks/cache/useStocksCache";
import Number from "../../number";
import SidebarSection from "../section";

const NetworthSection = () => {
  const currentInvestor = useCurrentInvestorCache();
  const stocksCache = useStocksCache();
  const networth = currentInvestor
    ? calculateNetworth(currentInvestor, stocksCache ?? undefined)
    : 0;

  return (
    <SidebarSection>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>Net Worth</p>
        <Number
          value={networth}
          style={{
            fontWeight: 600,
            fontSize: "20px",
          }}
          currency
        />
      </div>
      <div
        style={{
          height: 2,
          backgroundColor: colors.tertiary(),
          borderRadius: "4px",
          marginTop: "6px",
          marginBottom: "6px",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "2px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>Cash</div>
          <Number value={currentInvestor?.cash ?? 0} currency />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>Assets</div>
          <Number value={networth - (currentInvestor?.cash ?? 0)} currency />
        </div>
      </div>
    </SidebarSection>
  );
};

export default NetworthSection;
