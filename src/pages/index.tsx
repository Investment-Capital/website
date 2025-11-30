import { useModals } from "../hooks/useModals";
import TestModal from "../modals/test";

const IndexPage = () => {
  const modals = useModals();

  return <button onClick={() => modals?.add(TestModal)}>add modal</button>;
};

export default IndexPage;
