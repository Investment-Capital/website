import layout from "../config/layout";
import useMobile from "./useMobile";

const useLayout = () => {
  const mobile = useMobile();
  const device = mobile ? "mobile" : "pc";

  return {
    content: {
      widthOffset:
        layout.sidebar.width[device] + 2 * layout.sidebar.padding[device],
      heightOffset:
        layout.navbar.height[device] + 2 * layout.navbar.verticalPadding,
      padding: layout.content.padding,
    },
    sidebar: {
      width: layout.sidebar.width[device],
      padding: layout.sidebar.padding[device],
    },
    navbar: {
      verticalPadding: layout.navbar.verticalPadding,
      horizontalPadding: layout.navbar.horizontalPadding,
      height: layout.navbar.height[device],
    },
  };
};

export default useLayout;
