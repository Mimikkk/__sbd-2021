import { FC, ReactElement } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

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
        color: 'rgba(0, 0, 0, 0.87)',
        height: 70,
        borderRadius: '15px',
        '&:hover': {
          background: 'rgba(124, 77, 255, 0.08)',
          borderRadius: '4px;',
        },
      }}
      button
      onClick={() => router.push(path)}
    >
      <ListItemIcon
        sx={{ color: 'rgba(120, 144, 156, 1)', justifyContent: 'center' }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: 16 }}>
            {title}
          </Typography>
        }
        secondary={
          <Typography sx={{ color: 'rgba(94, 99, 102, 1)', fontSize: 12 }}>
            {subtitle}
          </Typography>
        }
        sx={{ textAlign: 'left' }}
      />
    </ListItem>
  );
};
