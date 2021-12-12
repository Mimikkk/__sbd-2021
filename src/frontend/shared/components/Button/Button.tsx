import React, { VFC, ReactElement, MouseEventHandler, HTMLProps } from "react";
import { Button as MuiButton } from "@mui/material";

export type ButtonProps = HTMLProps<HTMLInputElement> & {
  title: string;
  icon: ReactElement;
  size?: string;
  onClick?: MouseEventHandler;
};

export const Button: VFC<ButtonProps> = ({ title, icon, onClick }) => {
  return (
    <MuiButton
      onClick={onClick}
      variant="contained"
      startIcon={
        <span
          style={{
            color: "rgba(124, 77, 255, 1)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {icon}
        </span>
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
