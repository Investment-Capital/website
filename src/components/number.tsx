import NumberFlow from "@number-flow/react";
import { getCurrency } from "locale-currency";

type Props = {
  value: number;
  currency?: boolean;
};

const Number = ({ value, currency }: Props) => {
  return (
    <NumberFlow
      value={value}
      format={{
        style: currency ? "currency" : "decimal",
        currency: getCurrency(navigator.language) ?? "USD",
        currencyDisplay: "narrowSymbol",
      }}
    />
  );
};

export default Number;
