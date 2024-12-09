import { Route, Routes } from "react-router";
import Navbar from "./components/navbar/navbar";
import routes from "./config/routes";
import { useLocalStorage } from "@uidotdev/usehooks";
import LoginMenu from "./components/loginMenu";
import PermissionsOnlyPage from "./components/permissionsOnlyPage";

const App = (): React.ReactNode => {
  const [authorization] = useLocalStorage("authorization", null);

  return (
    <div>
      <Navbar />
      <Routes>
        {routes.flatMap((route, index) => {
          const paths = Array.isArray(route.paths)
            ? route.paths
            : [route.paths];

          return paths.map((path) => (
            <Route
              key={index}
              path={path}
              element={
                (route.admin || route.owner || route.authorized) &&
                !authorization ? (
                  <LoginMenu />
                ) : route.admin || route.owner ? (
                  <PermissionsOnlyPage
                    element={route.element}
                    permission={route.owner ? "owner" : "admin"}
                  />
                ) : (
                  <route.element />
                )
              }
            />
          ));
        })}
      </Routes>
    </div>
  );
};

export default App;
