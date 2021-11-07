import React, { useState } from 'react';
import './App.css';
import { Box, Button } from '@mui/material';
import { NavBar } from 'Frontend/shared/components';
import { ViewHandler } from 'Frontend/components/views';
import * as faker from 'faker';
import { CourtService } from 'Frontend/shared/services';

const App = () => {
  const [num, setNum] = useState(0);
  console.log('hah');

  return (
    <Box sx={{ display: 'flex' }}>
      <Button
        onClick={async () => {
          await CourtService.delete(faker.datatype.uuid());

          await CourtService.update(faker.datatype.uuid(), {
            floor: 'some',
            isUnderMaintenance: true,
            isCovered: true,
          });

          console.log(await CourtService.readAll());

          await CourtService.create({
            floor: 'any',
            isCovered: true,
            isUnderMaintenance: true,
          });
        }}
      >{`Show random number Here ! ${num} !`}</Button>
      <NavBar/>
      <ViewHandler />
    </Box>
  );
};

export default App;
