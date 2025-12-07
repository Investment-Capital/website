import Button from "../components/button";
import { useModals } from "../hooks/useModals";
import LoginModal from "../modals/login";

const IndexPage = () => {
  const modals = useModals();

  return (
    <div>
      <Button onClick={() => modals?.add(LoginModal)} text="Login" />
    </div>
  );
};

export default IndexPage;
