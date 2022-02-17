import { FC, ReactElement } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export interface MenuProps {
  title: string;
  subtitle?: string;
  path: string;
  icon?: ReactElement;
}

export const Menu: FC<MenuProps> = ({ title, subtitle, icon, path }) => {
  const router = useRouter();
  return (
    <ListItem
      sx={{
        borderRadius: "4px",
        "&:hover .MuiListItemIcon-root": { color: "rgba(124, 77, 255, 1)" },
      }}
      button
      onClick={() => router.push(path)}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography sx={{ color: "rgba(0, 0, 0, 0.87)", fontSize: 16 }}>
            {title}
          </Typography>
        }
        secondary={
          <Typography sx={{ color: "rgba(94, 99, 102, 1)", fontSize: 12 }}>
            {subtitle}
          </Typography>
        }
      />
    </ListItem>
  );
};
