import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import LeaderboardType from "../types/leaderboard";
import SavedUser from "../types/savedUser";
import useFetchApi from "../hooks/useFetchApi";
import InfiniteScroll from "../components/infiniteScroll";
import leaderboards from "../config/leaderboards";
import Table from "../components/table";

const Leaderboard = (): React.ReactNode => {
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  const leaderboard = location.pathname.split("/")[3];
  const fetchApi = useFetchApi();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [leaderboardData, setLeaderboardData] =
    useState<LeaderboardType<SavedUser>[]>();
  const [more, setMore] = useState(true);

  useEffect(() => {
    setLeaderboardData(undefined);
    setPage(1);
    setMore(true);

    updateData(1);
  }, [location]);

  const updateData = (page: number) =>
    fetchApi(`/leaderboard/${type}/${leaderboard}?page=${page}`)
      .then((data) =>
        setLeaderboardData((leaderboardData) => [
          ...(leaderboardData ?? []),
          ...data,
        ])
      )
      .catch(() => setMore(false));

  return (
    <div>
      <div>
        {Object.entries(leaderboards).flatMap(([lbType, lb]) =>
          lb.map((value) => (
            <button
              onClick={() => navigate(`/leaderboard/${lbType}/${value}`)}
              key={value + lbType}
            >
              {lbType}: {value}
            </button>
          ))
        )}
      </div>

      <InfiniteScroll
        page={page}
        pageSize={10}
        hasMore={more}
        next={async () => {
          setPage(page + 1);
          await updateData(page + 1);
        }}
      >
        <Table
          titles={["Avatar", "Username", "Position", leaderboard]}
          values={(leaderboardData ?? []).map((data) => {
            return [
              { title: "Username", value: data.username },
              {
                title: leaderboard,
                value: data.value,
              },
              {
                title: "Position",
                value: data.position,
              },
              { title: "Avatar", value: data.avatar, image: true },
            ];
          })}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Leaderboard;
