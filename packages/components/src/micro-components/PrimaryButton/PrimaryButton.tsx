import React from "react";
import Button from "@mui/material/Button";

export const PrimaryButton = ({ className, onClickFunction, buttonText }) => {
  return (
    <Button
      sx={{
        border: "2px solid #000",
        backgroundColor: "#ADD8E6",
        color: "#000",
      }}
      className={className}
      onClick={onClickFunction}
    >
      {buttonText}
    </Button>
  );
};
