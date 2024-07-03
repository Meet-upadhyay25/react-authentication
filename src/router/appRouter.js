import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout";
import { Home } from "../Pages";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default appRouter;
