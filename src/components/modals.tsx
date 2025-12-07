import colors from "../config/colors";
import { useModals } from "../hooks/useModals";

const Modals = () => {
  const modals = useModals();
  const modal = modals?.current[0];

  if (!modal) return;
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: colors.dark.black(0.5),
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          backgroundColor: colors.dark.secondary(),
          padding: "24px",
          borderRadius: "6px",
        }}
      >
        <modal.component close={() => modals.close(modal.id)} />
      </div>
    </div>
  );
};

export default Modals;
