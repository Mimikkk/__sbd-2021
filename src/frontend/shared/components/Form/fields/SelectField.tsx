import { TextField as MuiTextField, MenuItem } from "@mui/material";
import { FormField } from "./FormField";
import { Discount } from '@models';
import Entity = Discount.Entity;

export interface Option {
  label: string;
  value: string | number | boolean | Date| Entity;
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
      {options.sort().map((option) => (
        //@ts-ignore
        <MenuItem key={option.value} value={option.value} sx={{"&:focus": {
          "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: "rgba(124, 77, 255, 0.08)"}}}}>
          {option.label}
        </MenuItem>
      ))}
    </MuiTextField>
  </FormField>
);
