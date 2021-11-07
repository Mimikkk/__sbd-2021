import { Container, Grid } from '@mui/material';
import React, { FC } from 'react';

export const Tile: FC = ({ children }) => {
  return (
    <Grid
      sx={{
        justifyContent: 'center',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Container style={{ padding: '0', margin: '5'}}>
        {children}
      </Container>
    </Grid>
  );
};