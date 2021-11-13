import { Tile } from 'shared/components';
import { List } from 'shared/components/List';
import { BoolCell } from 'shared/components/List/components';
import { Column } from 'react-table';
import { Court } from 'shared/models';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

import faker from 'faker';
import { Grid, Typography, Button } from '@mui/material';
import React from 'react';

const mockColumns: Column[] = [
  {
    accessor: 'name',
    Header: 'Name',
    // Cell: (value) => {
    //   return <div className={ColumnStyle}>{value}</div>;
    // },
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

const mockRows = [mockCourt(), mockCourt(), mockCourt(), mockCourt()];

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
              <Button
                variant="contained"
                startIcon={
                  <AddIcon style={{ color: 'rgba(93, 95, 239, 1)' }} />
                }
                size="large"
                style={{
                  backgroundColor: 'rgba(124, 77, 255, 0.05)',
                  color: 'rgba(0, 0, 0, 0.87)',
                  textTransform: 'none',
                  boxShadow: 'none',
                }}
              >
                Add new court
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="large"
                startIcon={
                  <SearchIcon style={{ color: 'rgba(93, 95, 239, 1)' }} />
                }
                style={{
                  backgroundColor: 'rgba(124, 77, 255, 0.05)',
                  color: 'rgba(0, 0, 0, 0.87)',
                  textTransform: 'none',
                  boxShadow: 'none',
                }}
              >
                Find court
              </Button>
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
