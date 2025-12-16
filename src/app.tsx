import { Route, Routes } from "react-router";
import routes from "./config/routes";
import Modals from "./components/modals";
import Navbar from "./components/navbar/navbar";
import colors from "./config/colors";
import Sidebar from "./components/sidebar/sidebar";
import useLayout from "./hooks/useLayout";

const App = (): React.ReactNode => {
  const layout = useLayout();

  return (
    <div
      style={{
        backgroundColor: colors.dark.secondary(),
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <Modals />
      <div>
        <Navbar />
        <Sidebar />
        <div
          style={{
            paddingTop: layout.content.heightOffset,
            paddingLeft: layout.content.widthOffset,
          }}
        >
          <div
            style={{
              borderTopLeftRadius: "12px",
              backgroundColor: colors.dark.primary(),
              height: `calc(100vh - ${
                layout.content.heightOffset + layout.content.padding * 2
              }px)`,
              width: `calc(100vw - ${
                layout.content.widthOffset + layout.content.padding * 2
              }px)`,
              padding: layout.content.padding,
              overflow: "auto",
            }}
          >
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} element={<route.element />} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
