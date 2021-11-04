import { Box, Button } from '@mui/material';
import { toast } from 'react-toastify';

export const HomeView = () => {
  return (
    <Box>
      <Box>Home View</Box>
      <Button
        onClick={() => {
          toast.success('Hello World!');
        }}
      >
        Click Me
      </Button>
    </Box>
  );
};
