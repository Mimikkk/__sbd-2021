import React, { VFC, ReactElement, MouseEventHandler } from "react";
import { Button as MuiButton } from "@mui/material";

export type ButtonProps = {
  title?: string;
  icon?: ReactElement;
  size?: string;
  onClick?: MouseEventHandler;
  disabled?: boolean;
};

export const Button: VFC<ButtonProps> = ({
  title,
  icon,
  onClick,
  disabled,
}) => (
  <MuiButton
    disabled={disabled}
    onClick={onClick}
    variant="contained"
    style={{
      backgroundColor: "rgba(124, 77, 255, 0.05)",
      color: "rgba(0, 0, 0, 0.87)",
      textTransform: "none",
      boxShadow: "none",
      minWidth: 0,
    }}
  >
    <span style={{ color: "rgb(124, 77, 255)", display: "flex" }}>{icon}</span>
    {title}
  </MuiButton>
);
