import { Grid } from "@mui/material";
import React, { FC } from "react";
import { style } from "styles";

export const Tile: FC = ({ children }) => (
  <Grid item className={style("tile")}>
    {children}
  </Grid>
);
