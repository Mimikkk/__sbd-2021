import React, { useState } from 'react';
import './App.css';
import { Box, Button } from '@mui/material';
import {
  MenuBar,
  NavigationMenu,
  NavigationMenuHeader,
  SubBar,
} from 'Frontend/shared/components';
import MailIcon from '@mui/icons-material/Mail';
import TennisIcon from '@mui/icons-material/SportsTennis';
import { ViewHandler } from 'Frontend/components/views';
import { ValuesService } from 'Frontend/shared/services/Values.service';
import * as faker from 'faker';

const App = () => {
  const [num, setNum] = useState(0);
  console.log('hah');

  return (
    <Box sx={{ display:'flex' }}>
      <Button onClick={async () => {
        console.log('haha');
        console.log(await ValuesService.getAll());
        setNum(await ValuesService.get(faker.datatype.number()));
      }}>{`Show random number Here ! ${num} !`}</Button>
      <NavigationMenu>
        <NavigationMenuHeader />
        <MenuBar
          title='Obiekty sportowe'
          path='sportObjects'
          description='Lista obiektów sportowych'
          icon={<TennisIcon />}
        />

        <MenuBar title='somewhere'>
          <SubBar title='somewhere' path='somewhere' icon={<MailIcon />} />
          <SubBar title='somewhere' path='somewhere' icon={<MailIcon />} />
        </MenuBar>
      </NavigationMenu>
      <ViewHandler />
    </Box>
  );
};

export default App;
