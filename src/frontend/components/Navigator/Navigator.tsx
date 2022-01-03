import { VFC } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WorkIcon from '@mui/icons-material/Work';
import { Menu, MenuProps } from "./Menu";
import { useFactory } from "shared/hooks";
import { style } from "styles";

const menus: MenuProps[] = [
  { title: "Go home", path: "/" },
  {
    title: "Clients",
    subtitle: "List of clients",
    path: "clients",
    icon: <PersonIcon />,
  },
  {
    title: "Courts",
    subtitle: "Court specifications",
    path: "courts",
    icon: <SportsBaseballIcon />,
  },
  {
    title: "Discounts",
    subtitle: "Available discounts",
    path: "discounts",
    icon: <LocalOfferIcon />,
  },
  {
    title: "Employees",
    subtitle: "List of employees",
    path: "employees",
    icon: <WorkIcon />,
  },
  {
    title: "Item",
    subtitle: "List of available items",
    path: "items",
    icon: <SportsTennisIcon />,
  },
  {
    title: "Item reservations",
    subtitle: "List of item reservation",
    path: "item-reservations",
    icon: <ListIcon />,
  },
  {
    title: "Price List",
    subtitle: "Actual prices",
    path: "prices",
    icon: <PaidIcon />,
  },
  {
    title: "Reservations",
    subtitle: "Court reservations",
    path: "reservations",
    icon: <ListIcon />,
  },

  {
    title: "Scheduler",
    subtitle: "Reservation scheduler",
    path: "scheduler",
    icon: <CalendarTodayIcon />,
  },
  {
    title: "Transactions",
    path: "transactions",
    icon: <ReceiptIcon />,
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
