import './App.css';
import { Box } from '@mui/material';
import {
  MenuBar,
  NavigationMenu,
  NavigationMenuHeader,
} from 'Frontend/shared/components';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ViewHandler } from 'Frontend/components/views';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavigationMenu>
        <NavigationMenuHeader />
        <MenuBar
          title="Calendar"
          subtitle="Show calendar"
          icon={<CalendarTodayIcon />}
          path="sportObjects"
          description="Lista obiektów sportowych"
        />
        <MenuBar
          title="Reservations"
          subtitle="Show list of all reservations"
          icon={<FormatListBulletedIcon />}/>
        <MenuBar title="Courts"
                 subtitle="Show info about courts"
                 icon={<CalendarTodayIcon />}/>
        <MenuBar title="Clients" subtitle="Show list of clients"/>
        <MenuBar title="Equipment" subtitle="Aviable equipment "/>
        <MenuBar title="Prices & discounts" subtitle="Show info about courts"/>
      </NavigationMenu>
      <ViewHandler />
    </Box>
  );
};

export default App;
