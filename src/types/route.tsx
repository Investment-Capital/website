import NavigationLinks from "./navigationLinks";

type Route = {
  navigation?: NavigationLinks;
  path: string;
  authorized?: boolean;
  element: JSX.Element;
};

export default Route;
