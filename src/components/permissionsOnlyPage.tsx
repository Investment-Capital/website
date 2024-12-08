import { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import Permissions from "../types/permissions";
import hasPermissions from "../functions/hasPermissions";
import PermissionPageProps from "../types/permissionPageProps";

type Data = {
  element: (props: PermissionPageProps) => React.ReactNode;
  permission: keyof Permissions;
};

const PermissionsOnlyPage = (props: Data) => {
  const fetchApi = useFetchApi();
  const [permissions, setPermissions] = useState<Permissions>();

  useEffect(() => {
    fetchApi("/account/permissions").then(setPermissions);
  }, []);

  return !permissions ? (
    <props.element permissions={null} loading />
  ) : !hasPermissions(props.permission, permissions) ? (
    "Invalid Permissions"
  ) : (
    <props.element permissions={permissions} loading={false} />
  );
};

export default PermissionsOnlyPage;
