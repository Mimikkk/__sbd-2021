import { useEffect, useState } from 'react';
import { courtService } from 'shared/services';
import { Tile } from 'shared/components';
import { List } from 'shared/components/List';
import { Court } from 'shared/models';
import { Column } from 'react-table';
import faker from 'faker';


const mockColumns: Column<Court.Row>[] = [
  {
    accessor: 'floor',
    Header: 'Floor type',
  },
{
    accessor: 'isCovered',
    Header: 'Cover',
    Cell: ({value}) => {
    return value ? "Yes" : "No"}
  },
  {
    accessor: 'isUnderMaintenance',
    Header: 'Available',
    Cell: ({value}) => {return value ? "Yes" : "No"}
  },
];

export const mockCourt = (initial?: Partial<Court.Model>): Court.Entity => ({
  id: faker.datatype.uuid(),
  updatedAt: '',
  createdAt: '',
  floor: faker.lorem.word(),
  isCovered: faker.datatype.boolean(),
  isUnderMaintenance: faker.datatype.boolean(),
  ...initial,
});

const  mockRows = [mockCourt(), mockCourt(), mockCourt(), mockCourt()]


const Courts = () => {
  const [items, setItems] = useState<Court.Model[]>([]);

  useEffect(() => {
    // courtService.readAll().then(setItems).catch(console.log);
  }, []);


  return (
    <Tile>
      <List columns={mockColumns} items={mockRows} />
    </Tile>
  );
};

export default Courts;
