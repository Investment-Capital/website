import PermissionPageProps from "../../types/permissionPageProps";

const AdminPanel = (props: PermissionPageProps) => {
  return <div>{JSON.stringify(props.permissions)}</div>;
};

export default AdminPanel;
