import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface LoginAction {
  type: "LOGIN";
  userName: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const loginReducer = (userName: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.userName;
  if (action.type === "LOGOUT") return "";

  return userName;
};

//export default loginReducer;

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
