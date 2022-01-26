import { Typography } from "@mui/material";

export const ListEmpty = () => (
  <div
    style={{
      display: "flex",
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      justifySelf: "center",
      backgroundColor: "rgba(124, 77, 255, 0.02)",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(120, 144, 156, 0.4)",
    }}
  >
    <Typography variant="h4">There's nothing to show</Typography>
  </div>
);
