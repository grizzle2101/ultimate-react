import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "./components/GameDetailsPage";
import HomePage from "./components/HomePage";
import App from "./App";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />, //same as layout
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/games/:slug",
        element: <GameDetailsPage />,
      },
    ],
  },
]);

export default router;
