import { Route, Routes } from "react-router";
import routes from "./config/routes";
import Modals from "./components/modals";

const App = (): React.ReactNode => {
  return (
    <div>
      <Modals />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
