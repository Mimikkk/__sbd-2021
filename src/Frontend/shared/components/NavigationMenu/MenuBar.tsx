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
  subtitle: string;
  description?: string;
  icon?: ReactElement;
  children?: ReactNode;
  path?: string;
}

export const MenuBar: FC<Props> = ({ title, subtitle, icon, children, path }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const isExpandable = Boolean(children);

  return (
    <List sx={{ padding: 0 }}>
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
          <ListItem button sx = {{ color: 'rgba(0, 0, 0, 0.87)', '&:hover': { background: 'rgba(124, 77, 255, 0.08)'}}}>
              <ListItemIcon sx = {{color: 'rgba(120, 144, 156, 1)', justifyContent: 'center'}}>
                {icon}
              </ListItemIcon>
            <ListItemText primary={title} secondary= {subtitle} sx={{ textAlign: 'left' }} />
            <Redirect to={`/${path}`} />
          </ListItem>
        </Link>
      )}
      <Collapse in={isOpen}>{children}</Collapse>
    </List>
  );
};
