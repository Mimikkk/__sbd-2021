import { HeaderGroup } from 'react-table';

export interface ListHeaderProps<T extends object> {
  // @ts-ignore
  headerGroups: HeaderGroup<T>[];
}

export const ListHeader = <T extends object>({
  headerGroups,
}: ListHeaderProps<T>) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
