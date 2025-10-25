import PageProps from "./pageProps";

type Route = {
  element: (props: PageProps) => React.ReactNode;
  path: string;
};

export default Route;
