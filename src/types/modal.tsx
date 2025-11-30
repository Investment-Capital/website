import { ReactNode } from "react";

type Props = {
  close: () => void;
};

type Modal = ({ close }: Props) => ReactNode;

export default Modal;
