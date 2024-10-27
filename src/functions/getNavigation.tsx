import routes from "../config/routes";
import NavigationLinks from "../types/navigationLinks";

const getNavigation = (
  filter: (navigationLink: NavigationLinks) => boolean
): NavigationLinks[] =>
  routes
    .filter((route) => {
      return route.navigation && filter(route.navigation);
    })
    .map((route) => {
      if (route.navigation && !route.navigation?.link)
        route.navigation.link = Array.isArray(route.paths)
          ? route.paths[0]
          : route.paths;

      return route.navigation;
    }) as NavigationLinks[];

export default getNavigation;
