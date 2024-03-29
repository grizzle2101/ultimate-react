import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetailPage from "./UserDetailPage";
import UserListPage from "./UserListPage";
import UserPage from "./userPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./privateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, //index = true, means this homepage.
      { path: "/login", element: <LoginPage /> },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/users",
            element: <UserListPage />,
            children: [
              { path: ":id/:name", element: <UserPage /> }, //UserPage only appears on correct link
            ],
          },
          { path: "/users/:id", element: <UserDetailPage /> },
        ],
      },
    ],
  },
]);

export default router;
