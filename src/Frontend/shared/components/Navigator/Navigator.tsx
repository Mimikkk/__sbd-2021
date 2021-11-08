import { Drawer } from '@mui/material';
import { VFC } from 'react';
import { Menu } from 'shared/components/Navigator/Menu';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const Navigator: VFC = () => (
  <Drawer className="Navigator" variant="permanent" open>
    <Menu title="Go home" path="/" />
    <Menu
      title="Calendar"
      subtitle="Reservation calendar"
      path="/calendar"
      icon={<CalendarTodayIcon />}
    />
    <Menu
      title="Reservations"
      subtitle="List of reservations"
      path="/reservations"
      icon={<FormatListBulletedIcon />}
    />
    <Menu
      title="Clients"
      subtitle="Clients information"
      path="/clients"
      icon={<CalendarTodayIcon />}
    />
    <Menu
      title="Prices & discounts"
      subtitle="Prices and discounts lists"
      path="/prices-and-discounts"
    />
    <Menu title="Courts" subtitle="Court specifications" path="/courts" />
    <Menu
      title="Equipment"
      path="/equipment"
      subtitle="Available equipment"
      icon={<CalendarTodayIcon />}
    />
    <Menu title="Employees" subtitle="Staff information" path="/employees" />
  </Drawer>
);
