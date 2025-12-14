import colors from "../config/colors";
import { useModals } from "../hooks/useModals";

const Modals = () => {
  const modals = useModals();
  const modal = modals?.current[0];

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: colors.dark.black(modal ? 0.5 : 0),
        backdropFilter: `blur(${modal ? 4 : 0}px)`,
        transition: "backdrop-filter 0.25s, background-color 0.25s",
        pointerEvents: modal ? "auto" : "none",
        zIndex: 2,
      }}
    >
      {modal && (
        <div
          style={{
            backgroundColor: colors.dark.secondary(),
            padding: "24px",
            borderRadius: "6px",
          }}
        >
          <modal.component close={() => modals.close(modal.id)} />
        </div>
      )}
    </div>
  );
};

export default Modals;
