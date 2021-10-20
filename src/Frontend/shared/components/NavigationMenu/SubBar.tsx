import React, { VFC } from 'react';
import { Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  description?: string;
  icon: React.ReactElement;
  path: string;
}

export const SubBar: VFC<Props> = ({ description, icon, title, path }) => (
  <>
    <Divider variant="middle" />
    <Link
      to={`/${path}`}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      <ListItem button>
        <ListItemIcon children={icon} sx={{ justifyContent: 'center' }} />
        <ListItemText
          primary={title}
          secondary={description}
          style={{ textAlign: 'center' }}
        />
      </ListItem>
    </Link>
  </>
);
