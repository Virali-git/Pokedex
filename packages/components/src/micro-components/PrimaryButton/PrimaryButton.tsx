import React from "react";
import Button from "@mui/material/Button";
import {ButtonStyle} from "./PrimaryButton.styles"

export const PrimaryButton = ({ className, onClickFunction, buttonText }) => {
  return (
    <Button
      sx={ButtonStyle}
      className={className}
      onClick={onClickFunction}
    >
      {buttonText}
    </Button>
  );
};
