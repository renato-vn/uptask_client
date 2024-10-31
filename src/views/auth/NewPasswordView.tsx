import NewPasswordForm from "@/components/auth/NewPasswordForm";
import NewPasswordToken from "@/components/auth/NewPasswordToken";
import { ConfirmToken } from "@/types/index";
import { useState } from "react";

const NewPasswordView = () => {
  const [token, setToken] = useState<ConfirmToken["token"]>("");
  const [isValidToken, setIsValidToken] = useState(false);

  const handleSetToken = (token: ConfirmToken["token"]) => {
    setToken(token);
  };

  const handleSetIsValidToken = (isValid: boolean) => {
    setIsValidToken(isValid);
  };

  return (
    <>
      <h1 className="text-5xl font-black text-white">
        Reestablecer Contraseña
      </h1>
      <p className="text-2xl font-light text-white mt-5">
        Ingresa el código que recibiste {""}
        <span className=" text-fuchsia-500 font-bold">
          {" "}
          por correo electrónico.
        </span>
      </p>

      {!isValidToken ? (
        <NewPasswordToken
          token={token}
          handleSetToken={handleSetToken}
          handleSetIsValidToken={handleSetIsValidToken}
        />
      ) : (
        <NewPasswordForm token={token} />
      )}
    </>
  );
};

export default NewPasswordView;
