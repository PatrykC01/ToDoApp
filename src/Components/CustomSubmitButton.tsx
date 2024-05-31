import React from "react";

interface CustomSubmitButtonProps {
  label: string;
  onClick: () => void;
}

const CustomSubmitButton: React.FC<CustomSubmitButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      style={{
        backgroundColor: "#61dafb",
        margin: "10px",
        padding: "0px 20px",
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "5px",
        height: "45px",
      }}
    >
      {label}
    </button>
  );
};

export default CustomSubmitButton;
