import { useRef } from "react";
import Modal from "../types/modal";
import { Auth } from "investmentcapital.js";
import { useLocalStorage } from "@uidotdev/usehooks";

const LoginModal: Modal = ({ close }) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [_, setAuthorization] = useLocalStorage("authorization");

  return (
    <div>
      <input placeholder="username" ref={usernameRef} />
      <input placeholder="password" ref={passwordRef} />
      <button
        onClick={() =>
          usernameRef.current &&
          passwordRef.current &&
          Auth.login(usernameRef.current.value, passwordRef.current.value).then(
            (data) => {
              setAuthorization(data.authorization);
              close();
            }
          )
        }
      >
        login
      </button>
    </div>
  );
};

export default LoginModal;
