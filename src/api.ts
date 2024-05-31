// api.ts

import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

export const getTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Błąd podczas pobierania zadań:", error);
    return [];
  }
};

export const saveTask = async (task: any) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error("Błąd podczas zapisywania zadania:", error);
    return null;
  }
};

export const updateTask = async (id: string, task: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
  } catch (error) {
    console.error("Błąd podczas aktualizacji zadania:", error);
    return null;
  }
};

export const deleteTask = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Błąd podczas usuwania zadania:", error);
    return null;
  }
};
