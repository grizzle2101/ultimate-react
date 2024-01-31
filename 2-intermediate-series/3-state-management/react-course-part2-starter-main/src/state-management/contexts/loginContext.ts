import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/loginReducer";

interface LoginContextType {
  user: string;
  authDispatch: Dispatch<AuthAction>;
}

const LoginContext = React.createContext<LoginContextType>(
  {} as LoginContextType
);

export default LoginContext;
