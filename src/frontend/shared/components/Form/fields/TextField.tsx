import { TextField as MuiTextField } from "@mui/material";
import { FormField } from "./FormField";

interface Props<T> {
  name: string;
  value?: T;
  label?: string;
  onChange?: (value: string) => void;
}

export const TextField = <T,>({ name, onChange, ...props }: Props<T>) => (
  <FormField name={name} onChange={onChange}>
    <MuiTextField {...props} fullWidth />
  </FormField>
);
