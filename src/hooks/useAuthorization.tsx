import { useLocalStorage } from "@uidotdev/usehooks";

const useAuthorization = () => {
  const [authorization, setAuthorization] = useLocalStorage<string | null>(
    "authorization",
    null
  );

  return [authorization, setAuthorization] as const;
};

export default useAuthorization;
