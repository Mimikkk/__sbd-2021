import { List } from 'shared/components/List';
import { Scheduler } from 'shared/models';
import { createSchedulerColumns } from './columns';
import { createSchedulerRows } from './rows';
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

  const columns: Scheduler.Column[] = useMemo(
    constant(createSchedulerColumns(courts)),
    [courts],
  );
  return (
    <List
      className={style('scheduler-body')}
      columns={columns}
      items={items}
      initial={Scheduler.state}
    />
  );
};
