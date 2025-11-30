import Modal from "./modal";

type ModalContext = {
  current: { component: Modal; id: string }[];
  add: (modal: Modal) => string;
  close: (id: string) => void;
};

export default ModalContext;
