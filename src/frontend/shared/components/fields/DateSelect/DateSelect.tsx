import React, { VFC } from "react";
import { useFactory } from "shared/hooks";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/lab";

interface Props {
  date: Date;
  min?: Date;
  max?: Date;
  onChange: (date: Date) => void;
  label?: string;
}

export const DateSelect: VFC<Props> = ({ date, min, max, onChange, label }) => {
  const [, Text] = useFactory(TextField);

  return (
    <DesktopDatePicker
      value={date}
      minDate={min}
      maxDate={max}
      onChange={(value) => value && onChange(value)}
      renderInput={Text}
      label={label}
    />
  );
};
