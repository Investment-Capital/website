import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import LeaderboardType from "../types/leaderboard";
import useFetchApi from "../hooks/useFetchApi";
import InfiniteScroll from "../components/infiniteScroll";
import LeaderboardComponent from "../components/leaderboard";
import LeaderboardConfig from "../types/leaderboardConfig";

const Leaderboard = (): React.ReactNode => {
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  const leaderboard = location.pathname.split("/")[3];
  const fetchApi = useFetchApi();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardType[]>();
  const [leaderboardConfig, setLeaderboardConfig] =
    useState<LeaderboardConfig>();
  const [more, setMore] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetchApi("/config/leaderboard").then(setLeaderboardConfig);
  }, []);

  useEffect(() => {
    setLeaderboardData(undefined);
    setPage(1);
    setMore(true);
    setError(undefined);

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
      .catch((error: Error) =>
        error.message == "No data found for this page"
          ? setMore(false)
          : setError(error.message)
      );

  return (
    <div>
      <div>
        {Object.entries(leaderboardConfig ?? []).flatMap(
          ([type, leaderboards]) =>
            leaderboards.map((leaderboard) => (
              <button
                onClick={() => navigate(`/leaderboard/${type}/${leaderboard}`)}
                key={leaderboard + type}
              >
                {type}: {leaderboard}
              </button>
            ))
        )}
      </div>

      {error ? (
        <h1>Error Loading Data: {error}</h1>
      ) : (
        <InfiniteScroll
          page={page}
          pageSize={10}
          hasMore={more}
          next={async () => {
            setPage(page + 1);
            await updateData(page + 1);
          }}
        >
          <LeaderboardComponent data={leaderboardData ?? []} />
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Leaderboard;
