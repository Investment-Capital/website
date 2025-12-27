import layout from "../config/layout";

// will add mobile modes to make the offsets dynamic etc
const useLayout = () => {
  return {
    ...layout,
    content: {
      widthOffset: layout.sidebar.width + 2 * layout.sidebar.padding,
      heightOffset: layout.navbar.height + 2 * layout.navbar.verticalPadding,
      ...layout.content,
    },
  };
};

export default useLayout;
