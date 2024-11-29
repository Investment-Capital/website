import Permissions from "../types/permissions";

const hasPermissions = (
  permission: keyof Permissions,
  permissions: Permissions
) =>
  permission == "owner" && permissions.owner
    ? true
    : permission == "admin" && (permissions.admin || permissions.owner);

export default hasPermissions;
