import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appRouter from "./router/appRouter";
import appStore from "./appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
