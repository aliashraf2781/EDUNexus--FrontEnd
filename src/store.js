import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import courseReducer from "./features/courses/coursesSlice.jsx"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
     courses: courseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});