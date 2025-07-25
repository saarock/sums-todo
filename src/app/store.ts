// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "../features/tasks/taskApi";
import { taskReducer } from "../features";

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
    task: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
});
