import NavigationLinks from "./navigationLinks";

type Route = {
  navigation?: NavigationLinks;
  paths: string | string[];
  authorized?: boolean;
  element: JSX.Element;
};

export default Route;
