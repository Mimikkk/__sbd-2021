import { Cell, Column, HeaderGroup, Row, useTable } from 'react-table';
import { each } from 'lodash';
import { useFactory } from 'shared/hooks';
import { VFC } from 'react';
import { elements } from 'shared/utils/elements';
import { scheduler__body as styling } from 'styles/Scheduler.module.scss';

export const SchedulerBody = () => {
  const data: any[] = [
    {
      time: '8:00',
      courts: [
        { name: 'Dane 1' },
        { name: 'Dane 2' },
        { name: 'Dane 3' },
        { name: 'Dane 4' },
      ],
    },
  ];
  const columns: Column<any>[] = [
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
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const ListHeaderGroup = ({
    group: { getHeaderGroupProps, headers },
  }: ListHeaderGroupProps) => {
    const ListHeader = ({ render, getHeaderProps }: HeaderGroup<any>) => (
      <th {...getHeaderProps()}>{render('Header')}</th>
    );

    return <tr {...getHeaderGroupProps()}>{headers.map(ListHeader)}</tr>;
  };

  const ListHeader = ({ groups }: ListHeaderProps) => (
    <thead>
      {groups.map((group) => (
        <ListHeaderGroup group={group} />
      ))}
    </thead>
  );

  interface ListRowProps {
    row: Row<any>;
  }

  interface ListCellProps {
    cell: Cell<any>;
  }

  const ListCell: VFC<ListCellProps> = ({ cell: { getCellProps, render } }) => (
    <td {...getCellProps()}>{render('Cell')}</td>
  );
  const ListRow: VFC<ListRowProps> = ({ row: { getRowProps, cells } }) => {
    const [Cells] = useFactory(ListCell);

    return (
      <tr {...getRowProps()}>
        <Cells items={elements(cells, 'cell')} />
      </tr>
    );
  };

  const ListBody = () => {
    const [Rows] = useFactory(ListRow);

    return (
      <tbody {...getTableBodyProps()}>
        <Rows items={elements(each(rows, prepareRow), 'row')} />
      </tbody>
    );
  };
  return (
    <table className={styling} {...getTableProps()}>
      <ListHeader groups={headerGroups} />
      <ListBody />
    </table>
  );
};

interface ListHeaderProps {
  groups: HeaderGroup<any>[];
}

interface ListHeaderGroupProps {
  group: HeaderGroup<any>;
}
