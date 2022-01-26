import { Grid, CircularProgress } from "@mui/material";

export const ListLoading = () => {
  return (
    <Grid
      item
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress style={{ color: "rgba(124, 77, 255, 1)" }} />
    </Grid>
  );
};
