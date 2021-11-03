import { FC, ReactElement, ReactNode } from 'react';
import { useToggle } from 'Frontend/shared/hooks';
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { RotatingArrow } from './RotatingArrow';
import { Link, Redirect } from 'react-router-dom';

export interface Props {
  title: string;
  description?: string;
  icon?: ReactElement;
  children?: ReactNode;
  path?: string;
}

export const MenuBar: FC<Props> = ({ title, icon, children, path }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const isExpandable = Boolean(children);

  return (
    <List sx={{ padding: 0 }}>
      <Divider variant="fullWidth" />
      {isExpandable ? (
        <ListItem button onClick={toggleOpen}>
          <ListItemIcon>
            <RotatingArrow shouldRotate={isOpen} />
          </ListItemIcon>
          <ListItemText primary={title} sx={{ textAlign: 'left' }} />
          <Redirect to={`/${path}`} />
        </ListItem>
      ) : (
        <Link
          to={`/${path}`}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <ListItem button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} sx={{ textAlign: 'left' }} />
            <Redirect to={`/${path}`} />
          </ListItem>
        </Link>
      )}
      <Collapse in={isOpen}>{children}</Collapse>
    </List>
  );
};
