import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SavedUser from "../types/savedUser";
import useFetchApi from "../hooks/useFetchApi";

const Lookup = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({
    lookup: "",
  });
  const search = searchParams.get("search") ?? "";
  const fetchApi = useFetchApi();

  const [users, setUsers] = useState<SavedUser[]>([]);

  useEffect(() => {
    fetchApi(`/investors?search=${search}`)
      .then(setUsers)
      .catch(() => setUsers([]));
  }, [location, search]);

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
        {users.map((e) => (
          <div onClick={() => navigate(`/investor/${e.id}`)}>
            <p>
              {e.displayName} ({e.username})
            </p>{" "}
            <img src={e.avatar} style={{ height: "50px" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lookup;
