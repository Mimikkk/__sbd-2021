import { Container, Divider, Drawer } from '@mui/material';
import React, { FC } from 'react';

export const NavigationMenu: FC = ({ children }) => {
  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        width: 200,
        '& .MuiDrawer-paper': { width: 200, borderRight: 0 },
      }}
      PaperProps={{ elevation: 0 }}
    >
      <Container style={{ padding: '0' }}>
        {children}
        <Divider variant="fullWidth" />
      </Container>
    </Drawer>
  );
};
