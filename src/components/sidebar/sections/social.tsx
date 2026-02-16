import colors from "../../../config/colors";
import redirect from "../../../functions/redirect";
import useHovered from "../../../hooks/useHovered";
import SocialType from "../../../types/social";

type Props = {
  social: SocialType;
};

const Social = ({ social }: Props) => {
  const { bind, hovered } = useHovered();

  return (
    <social.icon
      {...bind}
      onClick={() => redirect(social.link)}
      size={35}
      color={hovered ? colors.white() : colors.grey()}
      style={{
        cursor: "pointer",
        flexShrink: 0,
        transition: "0.25s",
        transform: `rotate(${hovered ? 360 : 0}deg)`,
      }}
    />
  );
};

export default Social;
