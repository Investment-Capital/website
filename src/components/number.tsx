import NumberFlow from "@number-flow/react";
import { getCurrency } from "locale-currency";
import { CSSProperties } from "react";

type Props = {
  value: number;
  currency?: boolean;
  style?: CSSProperties;
};

const Number = ({ value, currency, style }: Props) => {
  return (
    <NumberFlow
      value={value}
      style={style}
      format={{
        style: currency ? "currency" : "decimal",
        currency: getCurrency(navigator.language) ?? "USD",
        currencyDisplay: "narrowSymbol",
      }}
    />
  );
};

export default Number;
