import { VFC } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
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
  {
    title: "Items",
    subtitle: "Item",
    path: "items",
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
