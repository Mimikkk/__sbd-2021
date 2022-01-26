import { VFC } from "react";
import { TextField } from "@mui/material";
import { Nullable } from "@internal/types";
import { useField } from "formik";
import { DesktopDatePicker } from "@mui/lab";

export interface Props {
  value?: Nullable<Date>;
  name: string;
  label: string;
  minYear: number;
  maxYear: number;
  onChange?: (date: Nullable<Date>) => void;
}

export const DateField: VFC<Props> = ({
  name,
  label,
  minYear,
  maxYear,
  onChange,
}) => {
  const [field, meta, helpers] = useField({ name });

  return (
    <DesktopDatePicker
      minDate={new Date(minYear, 0)}
      maxDate={new Date(maxYear, 11, 31)}
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
