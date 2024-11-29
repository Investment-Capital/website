import { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import Permissions from "../types/permissions";
import hasPermissions from "../functions/hasPermissions";

type Data = {
  element: JSX.Element;
  permission: keyof Permissions;
};

const PermissionsOnlyPage = ({ permission, element }: Data) => {
  const fetchApi = useFetchApi();
  const [permissions, setPermissions] = useState<Permissions>();

  useEffect(() => {
    fetchApi("/account/permissions").then(setPermissions);
  }, []);

  return !permissions ? (
    <div>Loading...</div>
  ) : !hasPermissions(permission, permissions) ? (
    "Invalid Permissions"
  ) : (
    element
  );
};

export default PermissionsOnlyPage;
