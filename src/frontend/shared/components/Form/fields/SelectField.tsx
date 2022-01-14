import { TextField as MuiTextField, MenuItem } from "@mui/material";
import { FormField } from "./FormField";
import { Option } from "shared/utils/options/types";

interface Props<T> {
  name: string;
  options: Option<T>[];
  label?: string;
  onChange?: (value: T) => void;
}

export const SelectField = <T,>({
  name,
  onChange,
  options,
  ...props
}: Props<T>) => (
  <FormField name={name} onChange={onChange}>
    <MuiTextField select label="Select" fullWidth {...props}>
      {options.map(({ label, value }, index) => (
        <MenuItem key={index} value={value as any}>
          {label}
        </MenuItem>
      ))}
    </MuiTextField>
  </FormField>
);
