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
  const [field, meta] = useField(props);
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
      if (event instanceof Date)
        event = {
          type: "click",
          target: {
            value: event as any,
            name: name,
          },
        } as any;

      onChange?.(event.target.value);
      field.onChange(event);
    },
  };
  const extend = useCallback(
    (child) => cloneElement(child, properties),
    [properties]
  );

  return <>{Children.map(children, extend)}</>;
};
