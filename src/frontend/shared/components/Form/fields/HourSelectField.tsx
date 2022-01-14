import { useEffect, VFC } from "react";
import { TimePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import { Nullable } from "@internal/types";
import { useField } from "formik";
import { isSameDay, isValid, getMinutes, getHours } from "date-fns";

export interface Props {
  value?: Nullable<Date>;
  name: string;
  label: string;
  minHour: number;
  maxHour: number;
  minutesStep: number;
  day: Date;
  onChange?: (date: Nullable<Date>) => void;
}

export const HourSelectField: VFC<Props> = ({
  day,
  name,
  label,
  minHour,
  maxHour,
  minutesStep,
  onChange,
}) => {
  const [field, meta, helpers] = useField({ name });
  console.log({
    v: field.value,
    day,
    val: isValid(field.value),
    x: !isSameDay(field.value, day),
  });
  useEffect(() => {
    if (isValid(field.value) && !isSameDay(field.value, day)) {
      const minutes = getMinutes(field.value);
      const hours = getHours(field.value);
      helpers.setValue(new Date(day.setHours(hours, minutes, 0, 0)));
    }
  }, [day, field.value]);

  return (
    <TimePicker
      ampm={false}
      minutesStep={minutesStep}
      minTime={new Date(day.setHours(minHour, 0, 0))}
      maxTime={new Date(day.setHours(maxHour, 0, 0))}
      renderInput={(props) => (
        <TextField
          {...props}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
      onChange={(date) => {
        onChange?.(date);
        helpers.setValue(date);
      }}
      label={label}
      value={field.value}
    />
  );
};
