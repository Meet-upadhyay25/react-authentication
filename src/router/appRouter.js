import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout";
import { Login, User } from "../Pages";
import ProtectedRoutes from "./ProtectedRoutes";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        element:<ProtectedRoutes />,
        children:[
          {
            path:"/user",
            element:<User />
          },
          {
            path:"/dummy",
            element:<h1>Dummy</h1>
          }
        ]
      }
    ],
  },
]);

export default appRouter;
