import { SlashCommandBuilder } from "discord.js";
import { useEffect, useState } from "react";

const Commands = () => {
  const [commands, setCommands] = useState<any[]>();

  useEffect(() => {
    (async () => {
      const data = await fetch(`${import.meta.env.VITE_API_LINK}/commands`);
      if (data.ok) setCommands(await data.json());
    })();
  }, []);

  return (
    <div style={{ textAlign: "center", color: "white", padding: "50px" }}>
      {commands &&
        commands.map((e) => (
          <div key={e}>
            <p>Command: /{(e.data as SlashCommandBuilder).name}</p>
            <p>Category: {e.category}</p>
          </div>
        ))}
    </div>
  );
};

export default Commands;
