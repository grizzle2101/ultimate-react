import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import UserPage from "./userPage";
import useAuth from "./hooks/useAuth";

const Layout = () => {
  const { user } = useAuth();
  console.log("user - ", user);
  if (!user) return <Navigate to="/login" />;

  return (
    <>
      <NavBar />
      <div className="row">
        <div id="main" className="col">
          <Outlet />
        </div>
        <div className="col">
          <UserPage />
        </div>
      </div>
    </>
  );
};

export default Layout;
