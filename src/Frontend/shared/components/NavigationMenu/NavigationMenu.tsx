import { Container, Drawer } from '@mui/material';
import React, { FC } from 'react';

export const NavigationMenu: FC = ({ children }) => {
  return (
    <Drawer
      variant="permanent"
      open
      sx={{ width: 250, '& .MuiDrawer-paper': {width: 200, borderRight: 0, left: 35, top: 100}}}
      PaperProps={{elevation: 0 }}
    >
      <Container style={{ padding: '0', margin: '5'}}>
        {children}
      </Container>
    </Drawer>
  );
};
