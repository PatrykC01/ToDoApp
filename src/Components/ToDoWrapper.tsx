// src/components/ToDoWrapper.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store.ts";
import { ToDo } from "./ToDo.tsx";
import { EditToDoForm } from "./EditToDoForm.tsx";
import ToDoForm from "./ToDoForm.tsx";
import { v4 as uuidv4 } from "uuid";
import {
  fetchTasks,
  saveTask,
  updateTask,
  deleteTask,
} from "../slices/tasksSlice.ts";

export const ToDoWrapper: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const addToDo = (task: string, isDaily: boolean, color: string) => {
    const newTask = {
      id: uuidv4(),
      task,
      completed: false,
      isEditing: false,
      isDaily,
      color,
    };
    dispatch(saveTask(newTask));
  };

  const toggleComplete = (id: string) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (taskToUpdate) {
      dispatch(
        updateTask({
          id,
          task: { ...taskToUpdate, completed: !taskToUpdate.completed },
        })
      );
    }
  };

  const deleteToDo = (id: string) => {
    dispatch(deleteTask(id));
  };

  const editToDo = (id: string) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        dispatch(updateTask({ id, task: { ...task, isEditing: true } }));
      } else if (task.isEditing) {
        dispatch(
          updateTask({ id: task.id, task: { ...task, isEditing: false } })
        );
      }
    });
  };

  const editTask = (task: string, id: string) => {
    const taskToUpdate = tasks.find((todo) => todo.id === id);
    if (taskToUpdate) {
      dispatch(
        updateTask({ id, task: { ...taskToUpdate, task, isEditing: false } })
      );
    }
  };

  return (
    <div className="ToDoWrapper">
      <h1>ToDoList</h1>
      <ToDoForm addToDo={addToDo} />
      {tasks.map((task) =>
        task.isEditing ? (
          <EditToDoForm editToDo={editTask} task={task} key={task.id} />
        ) : (
          <ToDo
            task={task}
            key={task.id}
            toggleComplete={() => toggleComplete(task.id)}
            deleteToDo={() => deleteToDo(task.id)}
            editToDo={() => editToDo(task.id)}
          />
        )
      )}
    </div>
  );
};
