// ToDo.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

interface ToDoProps {
  task: {
    id: string;
    task: string;
    completed: boolean;
    isDaily: boolean;
    color: string;
  };
  toggleComplete: (id: string) => void;
  deleteToDo: (id: string) => void;
  editToDo: (id: string) => void;
}

export const ToDo: React.FC<ToDoProps> = ({
  task,
  toggleComplete,
  deleteToDo,
  editToDo,
}) => {
  const taskStyle = {
    marginLeft: task.isDaily ? "0" : "50px",
  };

  return (
    <div className="ToDo" style={{ backgroundColor: task.color }}>
      {task.isDaily && (
        <FontAwesomeIcon
          icon={faRepeat}
          className="repeatIcon"
          style={{ color: "white" }}
        />
      )}

      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
        style={taskStyle}
      >
        {task.task}
      </p>
      <div>
        <Button
          type="primary"
          icon={<EditFilled />}
          size="large"
          style={{
            color: "black",
            backgroundColor: "yellow",
          }}
          onClick={() => editToDo(task.id)}
        />
        <Button
          type="primary"
          icon={<DeleteFilled />}
          size="large"
          style={{ color: "black", backgroundColor: "yellow" }}
          onClick={() => deleteToDo(task.id)}
        />
      </div>
    </div>
  );
};
