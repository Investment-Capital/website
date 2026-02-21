import { useLevelsConfigCache } from "../hooks/cache/useLevelsConfigCache";
import Modal from "../types/modal";

const LevelModal: Modal = () => {
  const levelConfig = useLevelsConfigCache();

  return <p>{JSON.stringify(levelConfig)}</p>;
};

export default LevelModal;
