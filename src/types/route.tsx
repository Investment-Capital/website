import NavigationLinks from "./navigationLinks";
import Permissions from "./permissions";

type Route = {
  navigation?: NavigationLinks;
  paths: string | string[];
  authorized?: boolean;
  element: JSX.Element;
} & {
  [_ in keyof Permissions]?: boolean;
};

export default Route;
