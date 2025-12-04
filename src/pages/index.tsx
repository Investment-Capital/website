import { useModals } from "../hooks/useModals";
import LoginModal from "../modals/login";

const IndexPage = () => {
  const modals = useModals();

  return <button onClick={() => modals?.add(LoginModal)}>login</button>;
};

export default IndexPage;
