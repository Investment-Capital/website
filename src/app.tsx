import { Route, Routes } from "react-router";
import routes from "./config/routes";
import Modals from "./components/modals";
import Navbar from "./components/navbar/navbar";
import colors from "./config/colors";

const App = (): React.ReactNode => {
  return (
    <div
      style={{
        backgroundColor: colors.dark.primary(),
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <Modals />
      <div>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
