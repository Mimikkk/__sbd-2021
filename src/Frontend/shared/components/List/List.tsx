import { DataGrid, GridColDef as Column } from '@mui/x-data-grid';

interface Props<T extends object> {
  rows: T[];
  columns: Column[];
}

export const List = <T extends object>({ rows, columns }: Props<T>) => {
  return (
    <div style={{ height: 700, width: 950 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={columns.length}
        rowsPerPageOptions={[5]}
        style={{ border: 0 }}
      />
    </div>
  );
};
