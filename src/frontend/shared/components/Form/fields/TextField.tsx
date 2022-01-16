import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { FormField } from "./FormField";

type Props<T> = TextFieldProps & {
  name: string;
  value?: T;
  label?: string;
  onChange?: (value: string) => void;
};

export const TextField = <T,>({ name, onChange, ...props }: Props<T>) => (
  <FormField name={name} onChange={onChange}>
    <MuiTextField {...props} fullWidth />
  </FormField>
);
