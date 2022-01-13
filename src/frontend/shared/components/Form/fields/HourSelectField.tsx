import React, { VFC } from "react";
import { FormField } from "shared/components/Form/fields/FormField";
import { TimePicker } from "@mui/lab";
import { useFactory } from "shared/hooks";
import { TextField } from "@mui/material";
import { Nullable } from "@internal/types";

export interface Props {
  date: Date;
  name: string;
  label: string;
  minHour: number;
  maxHour: number;
  minutesStep: number;
  onChange?: (date: Nullable<Date>) => void;
}

export const HourSelectField: VFC<Props> = ({
  date,
  name,
  label,
  minHour,
  maxHour,
  minutesStep,
  onChange,
}) => {
  const [, Text] = useFactory(TextField);

  return (
    <FormField name={name}>
      <TimePicker
        value={date}
        ampm={false}
        minutesStep={minutesStep}
        minTime={new Date(date.setHours(minHour, 0, 0))}
        maxTime={new Date(date.setHours(maxHour, 0, 0))}
        renderInput={Text}
        onChange={onChange!}
        label={label}
      />
    </FormField>
  );
};
