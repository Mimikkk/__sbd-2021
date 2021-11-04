import { Container, Drawer } from '@mui/material';
import React, { FC } from 'react';

export const NavigationMenu: FC = ({ children }) => {
  return (
    <Drawer
      variant="permanent"
      open
      sx={{ width: 250, '& .MuiDrawer-paper': {width: 250, borderRight: 0}}}
      PaperProps={{elevation: 0 }}
    >
      <Container style={{ padding: '0', margin: '5'}}>
        {children}
      </Container>
    </Drawer>
  );
};
