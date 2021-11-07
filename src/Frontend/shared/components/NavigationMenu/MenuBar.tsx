import { FC, ReactElement, ReactNode } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText, Typography,
} from '@mui/material';
import { Link, Redirect } from 'react-router-dom';

export interface Props {
  title: string;
  subtitle: string;
  description?: string;
  icon?: ReactElement;
  children?: ReactNode;
  path?: string;
}

export const MenuBar: FC<Props> = ({ title, subtitle, icon, children, path }) => {
  return (
    <Link
      to={`/${path}`}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      <ListItem button sx={{
        color: 'rgba(0, 0, 0, 0.87)',
        height: 70,
        borderRadius: '15px',
        '&:hover': { background: 'rgba(124, 77, 255, 0.08)', borderRadius: '15px' },
      }}>
        <ListItemIcon sx={{ color: 'rgba(120, 144, 156, 1)', justifyContent: 'center' }}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={<Typography style={{color: 'rgba(0, 0, 0, 0.87)', fontSize: 16}}>{title} </Typography>}
          secondary={<Typography style={{color: 'rgba(94, 99, 102, 1)', fontSize: 12}}>{subtitle} </Typography>}
          sx={{ textAlign: 'left' }} />
        <Redirect to={`/${path}`} />
      </ListItem>
    </Link>
  );
};