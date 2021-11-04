import { ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavigationMenuHeader = () => {
  return (
    <ListItem
      sx={{
        paddingBottom: 5,
        textAlign: 'center',
      }}
    >
      <Link to="home">
        {/*<ListItemIcon*/}
        {/*  sx={{*/}
        {/*    justifyContent: 'center',*/}
        {/*    '& .MuiSvgIcon-root': {*/}
        {/*      width: '2em',*/}
        {/*      height: '2em',*/}
        {/*    },*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <MailIcon />*/}
        {/*</ListItemIcon>*/}
      </Link>
      <ListItemText primary="" />
    </ListItem>
  );
};
