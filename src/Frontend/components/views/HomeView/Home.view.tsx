import { Tile } from 'Frontend/shared/components/Tile';
import { ListTable } from 'Frontend/shared/components/ListTable';
import { Typography, Box } from '@mui/material';

export const HomeView = () => {
  return <Tile>
    <Box>
      <Typography style={{color: 'rgba(0, 0, 0, 0.87)', fontSize: 30}}> Clients</Typography>
      <ListTable/>
    </Box>
  </Tile>;
};
