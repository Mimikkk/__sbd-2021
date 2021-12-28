import { VFC } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Menu, MenuProps } from "./Menu";
import { useFactory } from "shared/hooks";
import { style } from "styles";

const development: MenuProps[] = [
  {
    title: "Reservations",
    subtitle: "List of reservations",
    path: "/under-development",
    icon: <FormatListBulletedIcon />,
  },
  {
    title: "Clients",
    subtitle: "Clients information",
    path: "/under-development",
    icon: <CalendarTodayIcon />,
  },
  {
    title: "Prices & discounts",
    subtitle: "Prices and discounts lists",
    path: "/under-development",
  },
  {
    title: "Equipment",
    path: "/under-development",
    subtitle: "Available equipment",
    icon: <CalendarTodayIcon />,
  },
  {
    title: "Employees",
    subtitle: "Staff information",
    path: "/under-development",
  },
];

const menus: MenuProps[] = [
  { title: "Go home", path: "/" },
  {
    title: "Scheduler",
    subtitle: "Reservation scheduler",
    path: "scheduler",
    icon: <CalendarTodayIcon />,
  },
  {
    title: "Courts",
    subtitle: "Court specifications",
    path: "courts",
  },
  {
    title: "Clients & Employees",
    subtitle: "People stuck in this void",
    path: "employees-and-clients",
  },
  {
    title: "Reservations",
    subtitle: "Item and court reservations 🎄",
    path: "reservations",
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
