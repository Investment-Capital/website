import { useModals } from "../hooks/useModals";

const Modals = () => {
  const modals = useModals();
  const modal = modals?.current[0];

  if (!modal) return;
  return (
    <div>
      <modal.component close={() => modals.close(modal.id)} />
    </div>
  );
};

export default Modals;
