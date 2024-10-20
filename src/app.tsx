import { Route, Routes } from "react-router-dom";
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
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                route.authorized && !authorization ? (
                  <LoginMenu />
                ) : (
                  route.element
                )
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
