import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { Tile as TileStyle } from './Tile.module.scss';

export const Tile: FC = ({ children }) => (
  <Grid item className={TileStyle}>
    {children}
  </Grid>
);
