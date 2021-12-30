import { VFC } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import WorkIcon from '@mui/icons-material/Work';
import { Menu, MenuProps } from "./Menu";
import { useFactory } from "shared/hooks";
import { style } from "styles";

const menus: MenuProps[] = [
  { title: "Go home", path: "/" },
  {
    title: "Scheduler",
    subtitle: "Reservation scheduler",
    path: "scheduler",
    icon: <CalendarTodayIcon />,
  },
  {
    title: "Reservations",
    subtitle: "Item and court reservations",
    path: "reservations",
    icon: <ListIcon />,
  },
  {
    title: "Employees",
    subtitle: "List of employees",
    path: "employees",
    icon: <WorkIcon />,
  },
  {
    title: "Clients",
    subtitle: "List of clients",
    path: "clients",
    icon: <PersonIcon />,
  },
  {
    title: "Prices & Discounts",
    path: "prices-and-discounts",
    icon: <PaidIcon />,
  },
  {
    title: "Equipment",
    path: "items",
    icon: <SportsTennisIcon />,
  },
  {
    title: "Equipment reservations",
    path: "reservations",
    icon: <ListIcon />,
  },
  {
    title: "Transactions",
    path: "transactions",
    icon: <ReceiptIcon />,
  },
  {
    title: "Courts",
    subtitle: "Court specifications",
    path: "courts",
    icon: <SportsBaseballIcon />,

  },
];

export const Navigator: VFC = () => {
  const [Menus] = useFactory(Menu);

  return (
    <div className={style("navigator")}>
      <Menus items={menus} />
    </div>
  );
};
