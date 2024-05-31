import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

interface Task {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
  isDaily: boolean;
  color: string;
}

export const fetchTasks = createAsyncThunk<Task[]>(
  "tasks/fetchTasks",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const saveTask = createAsyncThunk<Task, Task>(
  "tasks/saveTask",
  async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
  }
);

export const updateTask = createAsyncThunk<Task, { id: string; task: Task }>(
  "tasks/updateTask",
  async ({ id, task }) => {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
  }
);

export const deleteTask = createAsyncThunk<string, string>(
  "tasks/deleteTask",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(saveTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload.id);
        state[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
