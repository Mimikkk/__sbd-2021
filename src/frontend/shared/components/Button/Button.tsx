import React, { VFC, ReactElement, MouseEventHandler } from "react";
import { Button as MuiButton } from "@mui/material";

export type ButtonProps = {
  title: string;
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
}) => {
  return (
    <MuiButton
      disabled={disabled}
      onClick={onClick}
      variant="contained"
      startIcon={
        icon && (
          <span
            style={{
              color: "rgba(124, 77, 255, 1)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {icon}
          </span>
        )
      }
      style={{
        backgroundColor: "rgba(124, 77, 255, 0.05)",
        color: "rgba(0, 0, 0, 0.87)",
        margin: "0.4em",
        textTransform: "none",
        boxShadow: "none",
        alignItems: "center",
      }}
    >
      {title}
    </MuiButton>
  );
};
