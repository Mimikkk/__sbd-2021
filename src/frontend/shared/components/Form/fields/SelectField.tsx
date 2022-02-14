import {
  TextField as MuiTextField,
  MenuItem,
  TextFieldProps,
} from "@mui/material";
import { FormField } from "./FormField";
import { Option } from "shared/utils/options/types";

type Props<T> = {
  name: string;
  options: Option<T>[];
  label?: string;
  onChange?: (value: T) => void;
  loading?: boolean;
} & TextFieldProps;

export const SelectField = <T,>({
  name,
  onChange,
  options,
  loading,
  value,
  ...props
}: Props<T>) => (
  <FormField name={name} onChange={onChange}>
    <MuiTextField
      select
      fullWidth
      {...props}
      {...(loading && { label: "Loading...", disabled: true })}
    >
      {options.map(({ label, value, disabled }, index) => (
        <MenuItem key={index} value={value as any} disabled={disabled}>
          {label}
        </MenuItem>
      ))}
    </MuiTextField>
  </FormField>
);
