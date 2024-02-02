import { useContext, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";
import AuthContext from "./contexts/authContext";

const LoginStatus = () => {
  //4 - use
  const { user, dispatch: authDispatch } = useContext(AuthContext);

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
