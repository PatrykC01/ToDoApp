// src/components/ToDoForm.tsx
import React, { useState } from "react";
import { Switch } from "antd";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CustomTextInput from "./CustomTextInput.tsx";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import CustomSubmitButton from "./CustomSubmitButton.tsx";

interface ToDoFormProps {
  addToDo: (task: string, isDaily: boolean, color: string) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ addToDo }) => {
  const [value, setValue] = useState("");
  const [isDaily, setIsDaily] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ff5555");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length < 3) {
      alert("Zadanie musi mieć co najmniej 3 znaki!");
      return;
    }
    addToDo(value, isDaily, selectedColor);
    setValue("");
    setIsDaily(false);
  };

  const handleColorChange = (e: SelectChangeEvent<string>) => {
    setSelectedColor(e.target.value);
  };

  const handleRepeatChange = (checked: boolean) => {
    setIsDaily(checked);
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <CustomTextInput
        placeholder="Wprowadź nowe zadanie :)"
        value={value}
        onChange={setValue}
      />

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-standard-label"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          Kategoria
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedColor}
          onChange={handleColorChange}
          label="Category"
          style={{
            backgroundColor: selectedColor,
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          <MenuItem
            value={"#ff5555"}
            style={{
              backgroundColor: "red",
              color: "white",
              marginBottom: "3px",
            }}
          >
            Nauka
          </MenuItem>
          <MenuItem
            value={"#5555ff"}
            style={{
              backgroundColor: "blue",
              color: "white",
              marginBottom: "3px",
            }}
          >
            Praca
          </MenuItem>
          <MenuItem
            value={"#558555"}
            style={{
              backgroundColor: "green",
              color: "white",
              marginBottom: "3px",
            }}
          >
            Dom
          </MenuItem>
          <MenuItem
            value={"#702caf"}
            style={{ backgroundColor: "purple", color: "white" }}
          >
            Czas wolny
          </MenuItem>
        </Select>
      </FormControl>

      <Switch checked={isDaily} onChange={handleRepeatChange} />
      <FontAwesomeIcon icon={faRepeat} className="repeatIcon" />

      <CustomSubmitButton label="Dodaj Zadanie" onClick={() => {}} />
    </form>
  );
};

export default ToDoForm;
