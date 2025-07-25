// Import necessary functions and types from Redux Toolkit and local type definitions
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, FilterTypes, TaskState } from "../../types";

// ------------------- RTK Query API Setup -------------------

// This section creates an API service using RTK Query to fetch tasks from a remote server
export const taskApi = createApi({
  reducerPath: "taskApi", // Unique key for API reducer in the store
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/", // Base URL for API calls
  }),
  endpoints: (builder) => ({
    // Define a query endpoint to fetch tasks with pagination support
    getTasks: builder.query<Task[], { page: number; limit?: number }>({
      query: ({ page, limit = 10 }) => `todos?_limit=${limit}&_page=${page}`,
    }),
  }),
});

// Export auto-generated hook for fetching tasks in components
export const { useGetTasksQuery } = taskApi;

// ------------------- Local Task Slice (State Management) -------------------

// Initial state of the task slice
const initialState: TaskState = {
  tasks: [],
  filter: "all",
};

// Create a slice of the Redux state for local task operations
const taskSlice = createSlice({
  name: "task", // Name of the slice
  initialState,
  reducers: {
    /**
     * Add a task if it doesn't already exist (based on ID)
     */
    setTask: (state, action: PayloadAction<Task>) => {
      const isFound = state.tasks.find((task) => task.id === action.payload.id);
      if (!isFound) {
        state.tasks.push(action.payload);
      }
    },

    /**
     * Filter state to only keep the task with the given ID
     */
    getTaskById: (state, action: PayloadAction<string | number>) => {
      state.tasks = state.tasks.filter((task) => task.id === action.payload);
    },

    /**
     * Set the current filter (e.g., all, completed, pending)
     */
    setFilter: (state, action: PayloadAction<FilterTypes>) => {
      state.filter = action.payload;
    },

    /**
     * Delete a task from state by ID
     */
    deleteTaskById: (state, action: PayloadAction<string | number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    /**
     * Toggle the completion status of a task
     */
    changeStatusOfTheTask: (state, action: PayloadAction<string | number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    /**
     * Edit an existing task’s title and completion status
     */
    editTask: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
        task.completed = action.payload.completed;
      }
    },
  },
});

// Export all action creators
export const {
  setTask,
  getTaskById,
  setFilter,
  deleteTaskById,
  changeStatusOfTheTask,
  editTask,
} = taskSlice.actions;

// Export the reducer to be added to the Redux store
export default taskSlice.reducer;
