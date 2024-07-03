import React from "react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./router/appRouter";

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
