import Button from "../components/button";
import colors from "../config/colors";
import useAuthorization from "../hooks/useAuthorization";
import Modal from "../types/modal";

const SettingsModal: Modal = ({ close }) => {
  const [_, setAuthorization] = useAuthorization();

  return (
    <div>
      <Button
        backgroundColor={colors.red}
        text="Logout"
        onClick={() => setAuthorization(null)}
      />
      <p onClick={close}>close</p>
    </div>
  );
};

export default SettingsModal;
