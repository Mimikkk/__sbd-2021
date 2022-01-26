import { FormField } from "./FormField";
import React, { useState, VFC } from 'react';
import { DateSelect } from '../../fields';

interface Props<T> {
  name: string;
  date?: Date;
  value?: T;
  label?: string;
  onChange?: (value: Date) => void;
}

export const DateField = <T,>({ name, onChange, ...props }: Props<T>) => {
  const [value, setValue] = useState(new Date());
  return(
    <FormField name={name} onChange={onChange}>
      <DateSelect onChange={setValue} {...props}/>
    </FormField>
  )};
