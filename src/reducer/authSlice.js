import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    refreshToken: null,
    accessToken:null,
    isAuthenticated: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken
      state.isAuthenticated = true;
    },

    logoutUser: (state) => {
      state.refreshToken = null;
      state.accessToken = null
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logoutUser } = authSlice.actions;

export default authSlice.reducer;
