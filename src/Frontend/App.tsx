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
import { Toaster } from 'Frontend/shared/components/Toaster';
import './App.css';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavigationMenu>
        <NavigationMenuHeader />
        <MenuBar
          title="Korty"
          path="courts"
          description="Lista kortów obiektu sportowego"
          icon={<TennisIcon />}
        />
        <MenuBar title="somewhere">
          <SubBar title="somewhere" path="somewhere" icon={<MailIcon />} />
          <SubBar title="somewhere" path="somewhere" icon={<MailIcon />} />
        </MenuBar>
      </NavigationMenu>
      <ViewHandler />
      <Toaster />
    </Box>
  );
};

export default App;
