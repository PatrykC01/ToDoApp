import React from "react";

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        backgroundColor: "antiqueWhite",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "20px",
        fontWeight: "bold",
        border: "2px solid",
        width: "290px",
      }}
    />
  );
};

export default CustomTextInput;