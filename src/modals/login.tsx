import { useRef } from "react";
import Modal from "../types/modal";
import { Auth } from "investmentcapital.js";
import useAuthorization from "../hooks/useAuthorization";
import Button from "../components/button";
import colors from "../config/colors";

const LoginModal: Modal = ({ close }) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [_, setAuthorization] = useAuthorization();

  return (
    <div>
      <input placeholder="username" ref={usernameRef} />
      <input placeholder="password" ref={passwordRef} />
      <Button
        text="Login"
        onClick={() =>
          usernameRef.current &&
          passwordRef.current &&
          Auth.login(usernameRef.current.value, passwordRef.current.value).then(
            (data) => {
              setAuthorization(data.authorization);
              close();
            },
          )
        }
      />
      <Button text="Cancel" backgroundColor={colors.red} onClick={close} />
    </div>
  );
};

export default LoginModal;
