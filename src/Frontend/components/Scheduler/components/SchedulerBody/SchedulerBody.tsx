import { Column } from 'react-table';
import { Scheduler } from 'shared/models';
import { List } from 'shared/components/List';
import { createSchedulerColumns, createSchedulerRows } from './utils';
import { useMemo, useState } from 'react';
import { constant } from 'lodash';
import { style } from 'styles';

export const SchedulerBody = () => {
  const [courts, setCourts] = useState(4);
  const today = useMemo(constant(new Date()), []);

  const items: Scheduler.Row[] = useMemo(
    constant(createSchedulerRows(courts, today)),
    [courts, today],
  );

  const columns: Column<Scheduler.Row>[] = useMemo(
    constant(createSchedulerColumns(courts)),
    [courts],
  );

  return (
    <List
      className={style('scheduler-body')}
      columns={columns}
      items={items}
      onDragStart={() => {
        console.log('drag start');
      }}
    />
  );
};
