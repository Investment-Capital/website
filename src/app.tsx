import { Route, Routes } from "react-router";
import routes from "./config/routes";

const App = (): React.ReactNode => {
  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
