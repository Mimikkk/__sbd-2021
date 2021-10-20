import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import {
  MenuBar,
  NavigationMenu,
  NavigationMenuHeader,
  SubBar,
} from 'Frontend/shared/components';
import MailIcon from '@mui/icons-material/Mail';
import TennisIcon from '@mui/icons-material/SportsTennis';
import { ViewHandler } from 'Frontend/components/views';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavigationMenu>
        <NavigationMenuHeader />
        <MenuBar
          title="Obiekty sportowe"
          path="sportObjects"
          description="Lista obiektów sportowych"
          icon={<TennisIcon />}
        />

        <MenuBar title="somewhere">
          <SubBar title="somewhere" path="somewhere" icon={<MailIcon />} />
          <SubBar title="somewhere" path="somewhere" icon={<MailIcon />} />
        </MenuBar>
      </NavigationMenu>
      <ViewHandler />
    </Box>
  );
};

export default App;
