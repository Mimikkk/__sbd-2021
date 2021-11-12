import { Scheduler as SchedulerStyle } from './Scheduler.module.scss';
import { useTable } from 'react-table';
import { Grid } from '@mui/material';
import { SchedulerHeader } from 'shared/components/Scheduler/components';

export const Scheduler = () => {
  const isEmpty = false;

  const columns: any[] = [];
  const data: any[] = [];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SchedulerHeader />
      </Grid>
      <table className={SchedulerStyle} {...getTableProps()}>
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
          <tr>
            <td scope="row">1</td>
            <td scope="row">2</td>
            <td scope="row">3</td>
          </tr>
        </tbody>
      </table>
    </Grid>
    // <Grid container spacing={2}>
    //   <Grid item xs={12}>
    //     <Divider variant="middle" />
    //   </Grid>
    //   <Grid item xs={12}>
    //     {isEmpty ? <SchedulerEmpty /> : <SchedulerBody />}
    //   </Grid>
    // </Grid>
  );
};
