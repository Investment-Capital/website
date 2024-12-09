import { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import Command from "../types/command";

const Commands = (): React.ReactNode => {
  const [commands, setCommands] = useState<Command[]>();
  const fetchApi = useFetchApi();

  useEffect(() => {
    fetchApi(`/commands`).then(setCommands);
  }, []);

  return (
    <div style={{ textAlign: "center", color: "white", padding: "50px" }}>
      {commands &&
        commands.map((e, index) => (
          <div key={index}>
            <p>Command: /{e.data.name}</p>
            <p>Category: {e.category}</p>
          </div>
        ))}
    </div>
  );
};

export default Commands;
