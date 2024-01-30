interface LoginAction {
  type: "LOGIN";
  userName: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type AuthAction = LoginAction | LogoutAction;

const loginReducer = (userName: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.userName;
  if (action.type === "LOGOUT") return "";

  return userName;
};

export default loginReducer;
