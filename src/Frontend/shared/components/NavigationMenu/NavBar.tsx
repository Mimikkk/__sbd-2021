import { MenuBar, NavigationMenu } from 'Frontend/shared/components/index';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const NavBar = () => {
  return (
    <NavigationMenu>
      <MenuBar title='Calendar' subtitle='Show calendar' icon={<CalendarTodayIcon />} />
      <MenuBar title='Reservations' subtitle='List of reservations' icon={<FormatListBulletedIcon />} />
      <MenuBar title='Clients' subtitle='Clients informations' icon={<CalendarTodayIcon />} />
      <MenuBar title='Prices & discounts' subtitle='Actual prices' />
      <MenuBar title='Courts' subtitle='Court specification' />
      <MenuBar title='Equipment' subtitle='Aviable equipment' icon={<CalendarTodayIcon />}/>
      <MenuBar title='Employees' subtitle='Staff information ' />
    </NavigationMenu>
  );
};