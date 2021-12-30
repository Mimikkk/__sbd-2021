import React, { VFC } from "react";
import { useFactory } from "shared/hooks";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/lab";
import { style } from "styles";

interface Props {
  date: Date;
  min?: Date;
  max?: Date;
  onChange: (date: Date) => void;
  classname: string
}

export const DateSelect: VFC<Props> = ({ date, min, max, onChange, classname }) => {
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
  );
};