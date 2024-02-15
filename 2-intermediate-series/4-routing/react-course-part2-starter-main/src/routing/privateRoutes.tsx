import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoutes = () => {
  const { user } = useAuth();
  console.log("user - ", user);
  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
