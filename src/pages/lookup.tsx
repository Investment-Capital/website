import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SavedUser from "../types/savedUser";
import useFetchApi from "../hooks/useFetchApi";
import InfiniteScroll from "../components/infiniteScroll";

const Lookup = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams({
    lookup: "",
  });

  const fetchApi = useFetchApi();
  const navigate = useNavigate();
  const location = useLocation();
  const search = searchParams.get("search") ?? "";

  const [page, setPage] = useState(1);
  const [more, setMore] = useState(true);
  const [users, setUsers] = useState<SavedUser[]>();

  useEffect(() => {
    setUsers(undefined);
    setPage(1);
    setMore(true);

    updateData(search, 1);
  }, [location, search]);

  const updateData = (search: string, page: number) =>
    fetchApi(`/investors?search=${search}&page=${page}`)
      .then((data) => setUsers((users) => [...(users ?? []), ...data]))
      .catch(() => setMore(false));

  return (
    <div>
      <input
        value={search}
        onChange={(value) =>
          setSearchParams({
            search: value.target.value,
          })
        }
      />
      <div style={{ color: "white" }}>
        <InfiniteScroll
          pageSize={10}
          page={page}
          hasMore={more}
          next={async () => {
            setPage(page + 1);
            await updateData(search, page + 1);
          }}
        >
          {(users ?? []).map((e) => (
            <div onClick={() => navigate(`/investor/${e.id}`)} key={e.id}>
              <p>
                {e.displayName} ({e.username})
              </p>
              <img src={e.avatar} style={{ height: "550px" }} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Lookup;
