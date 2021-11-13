import { Column, useTable } from 'react-table';
import { scheduler__body as styling } from 'styles/Scheduler.module.scss';
import { ListBody, ListHeader } from 'shared/components/List/components';

export const SchedulerBody = <T extends object>() => {
  const data: T[] = [
    {
      time: '8:00',
      courts: [
        { name: 'Dane 1' },
        { name: 'Dane 2' },
        { name: 'Dane 3' },
        { name: 'Dane 4' },
      ],
    },
  ] as any;
  const columns: Column<T>[] = [
    {
      accessor: 'time',
      Header: 'Czas',
    },
    {
      accessor: 'courts.0.name',
      Header: 'Kort 1',
    },
    {
      accessor: 'courts.1.name',
      Header: 'Kort 2',
    },
    {
      accessor: 'courts.2.name',
      Header: 'Kort 3',
    },
    {
      accessor: 'courts.3.name',
      Header: 'Kort 4',
    },
  ] as any;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table className={styling} {...getTableProps()}>
      <ListHeader groups={headerGroups} />
      <ListBody
        rows={rows}
        prepareRow={prepareRow}
        getTableBodyProps={getTableBodyProps}
      />
    </table>
  );
};
