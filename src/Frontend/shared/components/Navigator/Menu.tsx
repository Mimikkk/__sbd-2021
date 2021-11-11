import { FC, ReactElement } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

export interface Props {
  title: string;
  subtitle?: string;
  path: string;
  icon?: ReactElement;
}

export const Menu: FC<Props> = ({ title, subtitle, icon, path }) => {
  const router = useRouter();
  return (
    <ListItem
      sx={{
        color: 'rgba(0, 0, 0, 0.87)',
        height: 70,
        borderRadius: '15px',
        '&:hover': {
          background: 'rgba(124, 77, 255, 0.08)',
          borderRadius: '15px',
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
          // TODO fix fontSize to be 16 across all screens
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.87)' }}>{title}</Typography>
        }
        secondary={
          // TODO fix fontSize to be 12 across all screens
          <Typography sx={{ color: 'rgba(94, 99, 102, 1)' }}>
            {subtitle}
          </Typography>
        }
        sx={{ textAlign: 'left' }}
      />
    </ListItem>
  );
};
