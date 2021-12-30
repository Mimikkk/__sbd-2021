import React, { VFC } from "react";
import { useFactory } from "shared/hooks";
import { TextField as MuiTextField, TextField } from '@mui/material';
import { DesktopDatePicker } from "@mui/lab";
import { style } from "styles";
import { FormField } from '../../Form/fields/FormField';

interface Props<T> {
  name?: string;
  value?: T;
  date: Date;
  min?: Date;
  max?: Date;
  onChange: (date: Date) => void;
  classname: string
}

// export const DateSelect: <T,> = ({ name, date, min, max, onChange, classname, ...props}) => {
//   const [, Text] = useFactory(TextField);
//
//   return (
//     <span className={classname}>
//       <DesktopDatePicker
//         value={date}
//         minDate={min}
//         maxDate={max}
//         onChange={(value) => value && onChange(value)}
//         renderInput={Text}
//       />
//     </span>
//   );
// };


export const DateSelect = <T,>({ name, onChange, classname, date, min, max, ...props }: Props<T>) => {
  const [, Text] = useFactory(TextField);
  return (
  <span className={classname}>
      <DesktopDatePicker
        value={date}
        minDate={min}
        maxDate={max}
        onChange={(value) => value && onChange(value)}
        renderInput={Text}
      />
    </span>
)}