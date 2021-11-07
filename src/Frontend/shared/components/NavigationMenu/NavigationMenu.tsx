import { Container, Drawer } from '@mui/material';
import React, { FC } from 'react';

export const NavigationMenu: FC = ({ children }) => {
  return (
    <Drawer
      variant="permanent"
      open
      sx={{ width: 200,'& .MuiDrawer-paper': { width: 250,  top:70, left: 50, borderRight: 0, borderBottom: 0}}}
      PaperProps={{ elevation: 0}}
    >
      <Container style={{ padding: '0' }}>
        {children}
      </Container>
    </Drawer>
  );
};
