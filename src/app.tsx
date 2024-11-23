import { Route, Routes } from "react-router";
import Navbar from "./components/navbar/navbar";
import routes from "./config/routes";
import { useLocalStorage } from "@uidotdev/usehooks";
import LoginMenu from "./components/loginMenu";

const App = (): JSX.Element => {
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
                route.authorized && !authorization ? (
                  <LoginMenu />
                ) : (
                  route.element
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
