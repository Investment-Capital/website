import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import routes from "./config/routes";

const App = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
