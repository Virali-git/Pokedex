import React from "react";
import Button from "@mui/material/Button";

export const PrimaryButton = ({ className, onClickFunction, buttonText }) => {
  return (
    <div className={className}>
      <Button
        sx={{
          border: "2px solid #000",
          backgroundColor: "#ADD8E6",
          color: "#000",
        }}
        className="button"
        onClick={onClickFunction}
      >
        {buttonText}
      </Button>
    </div>
  );
};
