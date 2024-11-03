import InfiniteScrollComponent from "react-infinite-scroll-component";

type Data = {
  children: React.ReactNode[];
  page: number;
  pageSize: number;
  next: () => any;
  hasMore: boolean;
};

const InfinateScroll = ({ children, page, pageSize, hasMore, next }: Data) => {
  return (
    <InfiniteScrollComponent
      next={next}
      dataLength={children.length}
      hasMore={hasMore}
      loader=""
    >
      {children.slice(pageSize * page - 1)}
    </InfiniteScrollComponent>
  );
};

export default InfinateScroll;
