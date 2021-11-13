import { Grid, Divider, styled, Typography } from '@mui/material';
import { courtDates } from 'shared/components/Scheduler/values';
import { format } from 'date-fns';
import { Column, useTable } from 'react-table';
import { each } from 'lodash-es';

export const SchedulerBody = () => {
  const TypographyCell = styled(Typography)`
    &:hover {
      background: darkred;
    }

    &--is-selected {
      background: antiquewhite;
    }

    border-left: 1px solid grey;
  `;

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

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {each(rows, prepareRow).map((row) => (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => (
              <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <Grid container>
      <Grid container item xs={12}>
        <Grid item xs={1} />
        <Grid item container xs={11}>
          <Grid item xs={3}>
            Kort 1
          </Grid>
          <Grid item xs={3}>
            Kort 2
          </Grid>
          <Grid item xs={3}>
            Kort 3
          </Grid>
          <Grid item xs={3}>
            Kort 5
          </Grid>
        </Grid>
      </Grid>
      {courtDates(new Date()).map((hour) => {
        return null;

        return (
          <>
            <Grid item xs={1}>
              <Typography>{hour}</Typography>
            </Grid>
            <Grid item container xs={11}>
              <Grid item xs={3}>
                <TypographyCell>{hour}</TypographyCell>
              </Grid>
              <Grid item xs={3}>
                <TypographyCell>{hour}</TypographyCell>
              </Grid>
              <Grid item xs={3}>
                <TypographyCell>{hour}</TypographyCell>
              </Grid>
              <Grid item xs={3}>
                <TypographyCell>{hour}</TypographyCell>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};
