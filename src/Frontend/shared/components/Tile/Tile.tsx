import { Grid } from '@mui/material';
import React, { FC } from 'react';

export const Tile: FC = ({ children }) => {
  return (
    <Grid
      item
      sx={{
        alignItems: 'center',
        alignContent: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Grid>
  );
};
