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
        route.navigation.link = route.path;

      return route.navigation;
    }) as NavigationLinks[];

export default getNavigation;
