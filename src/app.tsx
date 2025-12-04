import { Route, Routes } from "react-router";
import routes from "./config/routes";
import Modals from "./components/modals";
import Navbar from "./components/navbar/navbar";

const App = (): React.ReactNode => {
  return (
    <div>
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
