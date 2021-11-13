import {
  Cell,
  Column,
  HeaderGroup,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
  useTable,
} from 'react-table';
import { each } from 'lodash';
import { useFactory } from 'shared/hooks';
import { elements } from 'shared/utils/elements';
import { scheduler__body as styling } from 'styles/Scheduler.module.scss';

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

export interface ListBodyProps<T extends object> {
  rows: Row<T>[];
  prepareRow: (row: Row<T>) => void;
  getTableBodyProps: (propGetter?: TableBodyPropGetter<T>) => TableBodyProps;
}

export const ListBody = <T extends object>({
  rows,
  prepareRow,
  getTableBodyProps,
}: ListBodyProps<T>) => {
  const [Rows] = useFactory<ListRowProps<T>>(ListRow);

  return (
    <tbody {...getTableBodyProps()}>
      <Rows items={elements(each(rows, prepareRow), 'row')} />
    </tbody>
  );
};

export interface ListHeaderGroupProps<T extends object> {
  header: HeaderGroup<T>;
}

export const ListHeaderGroup = <T extends object>({
  header: { render, getHeaderProps },
}: ListHeaderGroupProps<T>) => (
  <th {...getHeaderProps()}>{render('Header')}</th>
);

export interface ListHeaderGroupRowProps<T extends object> {
  group: HeaderGroup<T>;
}

export const ListHeaderGroupRow = <T extends object>({
  group: { getHeaderGroupProps, headers },
}: ListHeaderGroupRowProps<T>) => {
  const [Groups] = useFactory<ListHeaderGroupProps<T>>(ListHeaderGroup);

  return (
    <tr {...getHeaderGroupProps()}>
      <Groups items={elements(headers, 'header')} />
    </tr>
  );
};

export interface ListHeaderProps<T extends object> {
  groups: HeaderGroup<T>[];
}

export const ListHeader = <T extends object>({
  groups,
}: ListHeaderProps<T>) => {
  const [HeaderRows] =
    useFactory<ListHeaderGroupRowProps<T>>(ListHeaderGroupRow);

  return (
    <thead>
      <HeaderRows items={elements(groups, 'group')} />
    </thead>
  );
};

export interface ListCellProps<T extends object, V = any> {
  cell: Cell<T, V>;
}

export const ListCell = <T extends object, V = any>({
  cell: { getCellProps, render },
}: ListCellProps<T, V>) => <td {...getCellProps()}>{render('Cell')}</td>;

export interface ListRowProps<T extends object> {
  row: Row<T>;
}

export const ListRow = <T extends object>({
  row: { getRowProps, cells },
}: ListRowProps<T>) => {
  const [Cells] = useFactory<ListCellProps<T>>(ListCell);

  return (
    <tr {...getRowProps()}>
      <Cells items={elements(cells, 'cell')} />
    </tr>
  );
};
