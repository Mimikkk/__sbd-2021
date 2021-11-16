import { merge } from 'lodash';
import list from './List.module.scss';
import navigator from './Navigator.module.scss';
import scheduler from './Scheduler.module.scss';
import dateSelect from './DateSelect.module.scss';

const styles = merge(list, navigator, scheduler, dateSelect);

export const style = (key: string) => {
  if (!styles[key]) {
    console.error('available styles', styles);
    throw Error(`${key} is empty or not defined in styles.`);
  }
  return styles[key];
};
