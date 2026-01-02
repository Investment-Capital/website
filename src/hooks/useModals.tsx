import { createContext, useContext, useState } from "react";
import ModalContextType from "../types/modalContext";
import Container from "../types/container";

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: Container) => {
  const [modals, setModals] = useState<ModalContextType["current"]>([]);

  const add: ModalContextType["add"] = (modal) => {
    const id = Math.random().toString();
    setModals((modals) => [...modals, { id, component: modal }]);
    return id;
  };

  const close: ModalContextType["close"] = (id) => {
    setModals((modals) => modals.filter((modal) => modal.id !== id));
  };

  return (
    <ModalContext.Provider value={{ current: modals, add, close }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  return useContext(ModalContext);
};
