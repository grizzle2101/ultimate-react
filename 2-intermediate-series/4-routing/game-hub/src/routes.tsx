import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "./components/GameDetailsPage";
import HomePage from "./components/HomePage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />, //same as layout
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/games/:id",
        element: <GameDetailsPage />,
      },
    ],
  },
]);

export default router;
