import InfiniteScrollComponent from "react-infinite-scroll-component";

type Data = {
  children: React.ReactNode[];
  page: number;
  pageSize: number;
  next: () => any;
  hasMore: boolean;
};

const InfiniteScroll = ({ children, page, pageSize, hasMore, next }: Data) => {
  return (
    <InfiniteScrollComponent
      next={next}
      dataLength={children.length}
      hasMore={hasMore}
      loader=""
    >
      {children.slice(0, pageSize * page)}
    </InfiniteScrollComponent>
  );
};

export default InfiniteScroll;
