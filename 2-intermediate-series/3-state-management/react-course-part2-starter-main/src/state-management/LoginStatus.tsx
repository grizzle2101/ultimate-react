import { useContext, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";
import LoginContext from "./contexts/loginContext";

const LoginStatus = () => {
  //4 - use
  const { user, authDispatch } = useContext(LoginContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a
            onClick={() => {
              authDispatch({ type: "LOGOUT" });
            }}
            href="#"
          >
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => {
          authDispatch({ type: "LOGIN", userName: "Mosh" });
        }}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
