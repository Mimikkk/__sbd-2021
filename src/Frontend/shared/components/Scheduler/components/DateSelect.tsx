import React, { VFC } from 'react';
import { useFactory } from 'shared/hooks';
import { TextField, TextFieldProps } from '@mui/material';
import { DateSelect as DateSelectStyle } from './DateSelect.module.scss';
import { DesktopDatePicker } from '@mui/lab';
interface Props {
  date: Date;
  min?: Date;
  max?: Date;
  onChange: (date: Date) => void;
}

export const DateSelect: VFC<Props> = ({ date, min, max, onChange }) => {
  const [, Text] = useFactory<TextFieldProps>((props) => (
    <TextField {...props} inputProps={{ ...props.inputProps }} />
  ));

  return (
    <span className={DateSelectStyle}>
      <DesktopDatePicker
        value={date}
        minDate={min}
        maxDate={max}
        onChange={(value) => value && onChange(value)}
        renderInput={Text}
      />
    </span>
  );
};
