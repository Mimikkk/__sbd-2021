import { VFC } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@mui/icons-material/Person";
import PaidIcon from "@mui/icons-material/Paid";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import WorkIcon from "@mui/icons-material/Work";
import { Menu, MenuProps } from "./Menu";
import { useFactory } from "shared/hooks";
import { style } from "styles";

const menus: MenuProps[] = [
  {
    title: "Scheduler",
    subtitle: "View of a reservation scheduler",
    path: "scheduler",
    icon: <CalendarTodayIcon />,
  },
  {
    title: "Clients",
    subtitle: "List of registered clients",
    path: "clients",
    icon: <PersonIcon />,
  },
  {
    title: "Courts",
    subtitle: "Current courts specifications",
    path: "courts",
    icon: <SportsBaseballIcon />,
  },
  {
    title: "Discounts",
    subtitle: "List of available discounts",
    path: "discounts",
    icon: <LocalOfferIcon />,
  },
  {
    title: "Employees",
    subtitle: "List of current employees",
    path: "employees",
    icon: <WorkIcon />,
  },
  {
    title: "Items",
    subtitle: "List of available items",
    path: "items",
    icon: <SportsTennisIcon />,
  },
  {
    title: "Prices",
    subtitle: "Actual prices",
    path: "prices",
    icon: <PaidIcon />,
  },
  {
    title: "Item reservations",
    subtitle: "List of item reservation",
    path: "item-reservations",
    icon: <ListIcon />,
  },
  {
    title: "Court reservations",
    subtitle: "List of court reservations",
    path: "court-reservations",
    icon: <ListIcon />,
  },
  {
    title: "Payments",
    subtitle: "List of payments",
    path: "payments",
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
