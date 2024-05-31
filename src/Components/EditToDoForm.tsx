// EditToDoForm.tsx

import React, { useState } from "react";
import { Button, TextInput } from "grommet";

interface EditToDoFormProps {
  editToDo: (task: string, id: string) => void;
  task: {
    id: string;
    task: string;
    completed: boolean;
    isDaily: boolean;
    color: string;
  };
}

export const EditToDoForm: React.FC<EditToDoFormProps> = ({
  editToDo,
  task,
}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask = {
      ...task,
      task: value,
    };

    editToDo(updatedTask.task, task.id);
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <TextInput value={value} onChange={(e) => setValue(e.target.value)} />
      <Button type="submit" label="Update Task" primary />
    </form>
  );
};
