import { configureStore } from "@reduxjs/toolkit";
import Models from "../reducers/model.reducer";

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    model: Models,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
