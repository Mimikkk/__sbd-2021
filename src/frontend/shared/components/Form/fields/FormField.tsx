import { useField } from "formik";
import {
  ChangeEvent,
  cloneElement,
  Children,
  ReactNode,
  useCallback,
} from "react";

interface Props<T> {
  name: string;
  helper?: ReactNode;
  onChange?: (value: T) => void;
  children: ReactNode;
}

export const FormField = <T,>({
  children,
  helper,
  onChange,
  ...props
}: Props<T>) => {
  const [field, meta, helpers] = useField(props);
  const { name, value, onBlur } = field;
  const { touched, error } = meta;

  const properties = {
    name: props.name,
    value: value,
    onBlur: onBlur,
    "data-testid": name,
    error: touched && Boolean(error),
    helperText: (touched && error) || helper || "",
    onChange: (event: ChangeEvent<{ value: T }>) => {
      onChange?.(event.target.value);
      helpers.setValue(event.target.value);
      field.onChange(event);
    },
    InputLabelProps: {
      shrink: value !== null && value !== "",
    },
  };
  const extend = useCallback(
    (child) => cloneElement(child, properties),
    [properties]
  );

  return <>{Children.map(children, extend)}</>;
};
