import { TextField as MuiTextField, MenuItem } from "@mui/material";
import { FormField } from "./FormField";

export interface Option {
  label: string;
  value: any;
}

interface Props {
  name: string;
  options: Option[];
  label?: string;
  onChange?: (value: string) => void;
}

export const SelectField = ({ name, onChange, options, ...props }: Props) => (
  <FormField name={name} onChange={onChange}>
    <MuiTextField select label="Select" fullWidth {...props}>
      {options.map(({ label, value }, index) => (
        <MenuItem key={index} value={value}>
          {label}
        </MenuItem>
      ))}
    </MuiTextField>
  </FormField>
);
