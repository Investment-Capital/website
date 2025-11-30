import Modal from "../types/modal";

const TestModal: Modal = ({ close }) => {
  return (
    <div>
      <p>hi</p>
      <button onClick={close}>close</button>
    </div>
  );
};

export default TestModal;
