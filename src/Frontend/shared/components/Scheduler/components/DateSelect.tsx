import React, { VFC } from 'react';
import { useFactory } from 'shared/hooks';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/lab';
import { DateSelect as DateSelectStyle } from './DateSelect.module.scss';

interface Props {
  date: Date;
  min?: Date;
  max?: Date;
  onChange: (date: Date) => void;
}

export const DateSelect: VFC<Props> = ({ date, min, max, onChange }) => {
  const [, Text] = useFactory(TextField);

  return (
    <div className={DateSelectStyle}>
      <DesktopDatePicker
        value={date}
        minDate={min}
        maxDate={max}
        onChange={(value) => value && onChange(value)}
        renderInput={Text}
      />
    </div>
  );
};
