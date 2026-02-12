import { Route, Routes } from "react-router";
import routes from "./config/routes";
import Modals from "./components/modals";
import Navbar from "./components/navbar/navbar";
import colors from "./config/colors";
import Sidebar from "./components/sidebar/sidebar";
import useLayout from "./hooks/useLayout";
import useMobile from "./hooks/useMobile";

const App = (): React.ReactNode => {
  const layout = useLayout();
  const mobile = useMobile();

  return (
    <div
      style={{
        backgroundColor: colors.secondary(),
        minWidth: "100vw",
        minHeight: "100dvh",
        display: "flex",
      }}
    >
      <Modals />
      <div>
        <Navbar />
        {!mobile && <Sidebar />}
        <div
          style={{
            paddingTop: layout.content.heightOffset,
            paddingLeft: layout.content.widthOffset,
          }}
        >
          <div
            style={{
              borderTopLeftRadius: mobile ? undefined : "9px",
              backgroundColor: colors.primary(),
              minHeight: `calc(100dvh - ${
                layout.content.heightOffset + layout.content.padding * 2
              }px)`,
              width: `calc(100vw - ${
                layout.content.widthOffset + layout.content.padding * 2
              }px)`,
              padding: layout.content.padding,
            }}
          >
            <Routes>
              {routes.map((route) => (
                <Route
                  path={route.path}
                  key={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
