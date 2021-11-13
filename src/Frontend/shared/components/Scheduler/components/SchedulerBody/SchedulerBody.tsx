import { Column } from 'react-table';
import { mockCourt } from 'shared/models/values';
import { Scheduler } from 'shared/models/scheduler.model';
import { List } from 'shared/components/List';

const items: Scheduler.Row[] = [
  {
    time: '8:00',
    courts: [mockCourt(), mockCourt(), mockCourt(), mockCourt()],
  },
];
const columns: Column<Scheduler.Row>[] = [
  {
    accessor: 'time',
    Header: 'Czas',
  },
  {
    //@ts-ignore
    accessor: 'courts.0.name',
    Header: 'Kort 1',
  },
  {
    //@ts-ignore
    accessor: 'courts.1.name',
    Header: 'Kort 2',
  },
  {
    //@ts-ignore
    accessor: 'courts.2.name',
    Header: 'Kort 3',
  },
  {
    //@ts-ignore
    accessor: 'courts.3.name',
    Header: 'Kort 4',
  },
];

export const SchedulerBody = () => {
  return <List columns={columns} items={items} />;
};
