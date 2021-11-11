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
        minWidth: '100%',
        padding: '2em 4em 2em 4em',
      }}
    >
      {children}
    </Grid>
  );
};
