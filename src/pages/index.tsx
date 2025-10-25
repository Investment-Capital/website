import PageProps from "../types/pageProps";

const IndexPage = ({ stocksCache, accountCache }: PageProps) =>
  JSON.stringify({ stocksCache, accountCache });

export default IndexPage;
