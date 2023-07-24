import React from "react";
import Button from "@mui/material/Button";
import { ButtonStyle } from "./PrimaryButton.styles";
import { IPrimaryButtonProps } from "./PrimaryButton.types";

export const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  className,
  onClickFunction,
  buttonText,
}) => {
  return (
    <Button sx={ButtonStyle} className={className} onClick={onClickFunction}>
      {buttonText}
    </Button>
  );
};
