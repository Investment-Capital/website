import { Route, Routes } from "react-router";
import routes from "./config/routes";
import usePageProps from "./hooks/pageProps/usePageProps";

const App = (): React.ReactNode => {
  const pageProps = usePageProps();

  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<route.element {...pageProps} />} />
      ))}
    </Routes>
  );
};

export default App;
