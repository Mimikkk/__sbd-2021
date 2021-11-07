import './App.css';
import { Box } from '@mui/material';
import { ViewHandler } from 'Frontend/components/views';
import { NavBar } from 'Frontend/shared/components';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar/>
      <ViewHandler />
    </Box>
  );
};

export default App;
