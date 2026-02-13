import { X } from "lucide-react";
import colors from "../config/colors";
import { useModals } from "../hooks/useModals";
import useHovered from "../hooks/useHovered";

const Modals = () => {
  const modals = useModals();
  const modal = modals?.current[0];
  const { hovered, bind } = useHovered();

  return (
    <div
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundColor: colors.black(modal ? 0.5 : 0),
        backdropFilter: `blur(${modal ? 4 : 0}px)`,
        transition: "backdrop-filter 0.25s, background-color 0.25s",
        pointerEvents: modal ? "auto" : "none",
        zIndex: 3,
      }}
    >
      <X
        {...bind}
        onClick={() => modal && modals.close(modal.id)}
        style={{
          position: "fixed",
          margin: "12px",
          right: 0,
          cursor: "pointer",
          backgroundColor: colors.black(modal ? (hovered ? 0.6 : 0.3) : 0),
          backdropFilter: `blur(${modal ? 4 : 0}px)`,
          borderRadius: "100%",
          padding: "6px",
          transition:
            "backdrop-filter 0.25s, background-color 0.25s, color 0.25s",
          color: colors.white(modal ? 1 : 0),
          pointerEvents: modal ? "auto" : "none",
        }}
        size={40}
      />

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          display: "flex",
        }}
      >
        {modal && (
          <>
            <div
              style={{
                backgroundColor: colors.secondary(),
                padding: "24px",
                borderRadius: "6px",
              }}
            >
              <modal.component close={() => modals.close(modal.id)} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modals;
