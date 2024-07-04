import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import userReducer from "./reducer/userSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {}
};

const persistedState = loadState();

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  preloadedState: persistedState,
});

appStore.subscribe(() => {
  saveState(appStore.getState());
});

export default appStore;
