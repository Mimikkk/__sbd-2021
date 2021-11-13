import { Column } from 'react-table';
import { Scheduler } from 'shared/models';
import { List } from 'shared/components/List';
import { createSchedulerColumns, createSchedulerRows } from './utils';
import { useMemo, useState } from 'react';
import { constant } from 'lodash';
import { scheduler } from 'styles/Scheduler.module.scss';

export const SchedulerBody = () => {
  const [courts, setCourts] = useState(4);
  const today = new Date();

  const items: Scheduler.Row[] = useMemo(
    constant(createSchedulerRows(courts, today)),
    [courts],
  );

  const columns: Column<Scheduler.Row>[] = useMemo(
    constant(createSchedulerColumns(courts)),
    [courts],
  );

  return <List className={scheduler} columns={columns} items={items} />;
};
