import { Button, Tile } from 'shared/components';
import { List } from 'shared/components/List';
import { BoolCell } from 'shared/components/List/components';
import { Column } from 'shared/components/List';
import { Court } from 'shared/models';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import faker from 'faker';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const mockColumns: Column<Court.Entity>[] = [
  {
    accessor: 'name',
    Header: 'Name',
  },
  {
    accessor: 'floor',
    Header: 'Floor type',
  },
  {
    accessor: 'isCovered',
    Header: 'Cover',
    Cell: BoolCell,
  },
  {
    accessor: 'isUnderMaintenance',
    Header: 'Available',
    Cell: BoolCell,
  },
];

export const mockCourt = (initial?: Partial<Court.Model>): Court.Entity => ({
  id: faker.datatype.uuid(),
  name: faker.lorem.word(),
  updatedAt: '',
  createdAt: '',
  floor: faker.lorem.word(),
  isCovered: faker.datatype.boolean(),
  isUnderMaintenance: faker.datatype.boolean(),
  ...initial,
});

const mockRows = [
  mockCourt(),
  mockCourt(),
  mockCourt(),
  mockCourt(),
  mockCourt(),
  mockCourt(),
  mockCourt(),
  mockCourt(),
  mockCourt(),
  mockCourt(),
  mockCourt(),
  mockCourt(),
];

const Courts = () => {
  // const [items, setItems] = useState<Court.Model[]>([]);
  //
  // useEffect(() => {
  //   // courtService.readAll().then(setItems).catch(console.log);
  // }, []);

  return (
    <Tile>
      <Grid container style={{ width: '100%' }}>
        <Grid
          item
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Grid
            item
            style={{
              display: 'flex',
              width: '100%',
              alignContent: 'left',
              margin: '10px',
            }}
          >
            <Typography style={{ fontSize: '2em' }}>{'Courts'}</Typography>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Grid item>
              <Button title="Add new court" icon={<AddIcon />} />
            </Grid>
            <Grid item>
              <Button title="Find court" icon={<SearchIcon />} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ width: '100%' }}>
          <List columns={mockColumns} items={mockRows} pagination />
        </Grid>
      </Grid>
    </Tile>
  );
};

export default Courts;
