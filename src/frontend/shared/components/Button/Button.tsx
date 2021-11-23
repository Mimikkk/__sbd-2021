import React, { VFC, ReactElement } from "react";
import { Button as MuiButton } from "@mui/material";

export interface ButtonProps {
  title: string;
  icon: ReactElement;
  size: string;
}

export const Button: VFC<ButtonProps> = ({ title, icon, size }) => {
  return (
    <MuiButton
      variant="contained"
      size={size}
      startIcon={
        <div
          style={{
            color: "rgba(124, 77, 255, 1)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
      }
      style={{
        backgroundColor: "rgba(124, 77, 255, 0.05)",
        color: "rgba(0, 0, 0, 0.87)",
        textTransform: "none",
        boxShadow: "none",
        alignItems: "center",
      }}
    >
      {title}
    </MuiButton>
  );
};
