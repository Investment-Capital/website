import NavigationLinks from "./navigationLinks";

type Route = {
  navigation?: NavigationLinks;
  path: string;
  element: JSX.Element;
};

export default Route;
