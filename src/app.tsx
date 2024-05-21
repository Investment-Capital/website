import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Commands from "./pages/commands";
import useNavbar from "./components/navbar/useNavbar";
import { useEffect } from "react";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";

const App = () => {
  const navbar = useNavbar();
  const location = useLocation();

  useEffect(() => navbar.setMobileDropdownOpen(false), [location]);

  return (
    <div>
      {navbar.elements}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/lookup/:type" element={<p></p>} />
        <Route path="/market/:type" element={<p></p>} />
        <Route path="/lottery" element={<p></p>} />
        <Route path="/leaderboard/:type" element={<p></p>} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default App;
