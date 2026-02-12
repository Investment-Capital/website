import { Loader2, Search, X } from "lucide-react";
import Input from "../../../input";
import { useEffect, useState } from "react";
import colors from "../../../../config/colors";
import { Investor, Investors } from "investmentcapital.js";
import SearchOption from "./option";
import { useNavigate } from "react-router";

type Props = {
  modal?: boolean;
};

const SearchSection = ({ modal = false }: Props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [focussed, setFocussed] = useState(false);
  const [foundInvestors, setFoundInvestors] = useState<
    Investor["account"]["profile"][] | null
  >(null);

  useEffect(() => {
    let current = true;

    Investors.search(search)
      .then((data) => current && setFoundInvestors(data))
      .catch(() => setFoundInvestors([]));

    return () => {
      current = false;
    };
  }, [search]);

  return (
    <div
      style={{
        flex: 0.4,
        minWidth: modal ? undefined : "400px",
        position: "relative",
      }}
    >
      <Input
        icon={Search}
        onValueChange={setSearch}
        onFocusChange={setFocussed}
        placeholder="Search investors..."
        style={{
          borderTopLeftRadius: "9px",
          borderTopRightRadius: "9px",
          borderBottomLeftRadius: focussed && !modal ? "0px" : "9px",
          borderBottomRightRadius: focussed && !modal ? "0px" : "9px",
        }}
      />
      {(focussed || modal) && (
        <div
          onMouseDown={(element) => element.preventDefault()}
          style={{
            position: modal ? undefined : "absolute",
            backgroundColor: modal ? undefined : colors.primary(1),
            width: "100%",
            borderBottomLeftRadius: "9px",
            borderBottomRightRadius: "9px",
            border: modal ? undefined : `1px solid ${colors.tertiary()}`,
            boxSizing: "border-box",
            borderTop: "none",
            overflow: "auto",
            maxHeight: "300px",
            margin: modal ? "6px 0px" : undefined,
          }}
        >
          {!foundInvestors || foundInvestors.length == 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "9px",
                padding: "12px",
                alignItems: "center",
              }}
            >
              {!foundInvestors ? <Loader2 size={55} /> : <X size={55} />}
              <div>
                <p style={{ fontWeight: 600, fontSize: "20px" }}>
                  {!foundInvestors ? "Searching... " : "None Found"}
                </p>
                <p style={{ color: colors.grey(), fontSize: "14px" }}>
                  {!foundInvestors
                    ? "Shouldn't take too long."
                    : "Try searching something else."}
                </p>
              </div>
            </div>
          ) : (
            foundInvestors.map((investor) => (
              <SearchOption
                key={investor.id}
                title={investor.username}
                description={investor.id}
                icon={Investors.icon(investor.id)}
                onClick={() => navigate(`/investor/${investor.id}`)}
                modal={modal}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSection;
