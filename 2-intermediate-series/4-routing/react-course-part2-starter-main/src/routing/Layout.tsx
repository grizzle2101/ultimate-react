import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import UserPage from "./userPage";

const Layout = () => {
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
