import PageProps from "../../types/pageProps";
import useAccountCache from "./useAccountCache";
import useStocksCache from "./useStocksCache";

const usePageProps = (): PageProps => {
  const stocksCache = useStocksCache();
  const accountCache = useAccountCache();

  return { stocksCache, accountCache };
};

export default usePageProps;
