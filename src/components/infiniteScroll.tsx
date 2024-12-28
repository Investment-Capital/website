import InfiniteScrollComponent from "react-infinite-scroll-component";

type Data = {
  children: React.ReactNode[] | React.ReactNode;
  page: number;
  pageSize: number;
  next: () => any;
  hasMore: boolean;
};

const InfiniteScroll = ({ children, page, pageSize, hasMore, next }: Data) => {
  return (
    <InfiniteScrollComponent
      next={next}
      dataLength={Array.isArray(children) ? children.length : page * 10}
      hasMore={hasMore}
      loader=""
    >
      {Array.isArray(children) ? children.slice(0, pageSize * page) : children}
    </InfiniteScrollComponent>
  );
};

export default InfiniteScroll;
