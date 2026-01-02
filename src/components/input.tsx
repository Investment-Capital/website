import { CSSProperties } from "react";
import colors from "../config/colors";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  placeholder: string;
  onValueChange?: (value: string) => any;
  onFocusChange?: (focussed: boolean) => any;
  style?: CSSProperties;
};

const Input = ({
  placeholder,
  onValueChange,
  icon: Icon,
  onFocusChange,
  style,
}: Props) => {
  return (
    <div
      style={{
        padding: "7px",
        borderRadius: "9px",
        backgroundColor: colors.primary(),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "6px",
        border: `1px solid ${colors.tertiary()}`,
        color: colors.tertiary(),
        ...style,
      }}
    >
      {Icon && <Icon />}
      <input
        placeholder={placeholder}
        onChange={(element) =>
          onValueChange && onValueChange(element.target.value)
        }
        onFocus={() => onFocusChange && onFocusChange(true)}
        onBlur={() => onFocusChange && onFocusChange(false)}
        style={{
          outline: "none",
          backgroundColor: "transparent",
          border: "none",
          flex: 1,
          color: "white",
          fontSize: "14px",
        }}
      />
    </div>
  );
};

export default Input;
