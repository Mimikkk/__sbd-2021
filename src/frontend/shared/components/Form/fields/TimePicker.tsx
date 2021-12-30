import { SelectField } from './SelectField';
import { FC, VFC } from 'react';

export interface Props {
  date: Date;
  name: string;
  label: string;
}

export const TimePicker: VFC<Props> = ({ date, name, label}) => {
      return(
  <SelectField
    options={[
      { value: new Date(date.setHours(8)), label: "08:00" },
      { value: new Date(date.setHours(8, 30)), label: "08:30" },
      { value: new Date(date.setHours(9)), label: "09:00" },
      { value: new Date(date.setHours(9, 30)), label: "09:30" },
      { value: new Date(date.setHours(10)), label: "10:00" },
      { value: new Date(date.setHours(10, 30)), label: "10:30" },
      { value: new Date(date.setHours(11)), label: "11:00" },
      { value: new Date(date.setHours(11, 30)), label: "11:30" },
      { value: new Date(date.setHours(12)), label: "12:00" },
      { value: new Date(date.setHours(12, 30)), label: "12:30" },
      { value: new Date(date.setHours(13)), label: "13:00" },
      { value: new Date(date.setHours(13, 30)), label: "13:30" },
      { value: new Date(date.setHours(14)), label: "14:00" },
      { value: new Date(date.setHours(14, 30)), label: "14:30" },
      { value: new Date(date.setHours(15)), label: "15:00" },
      { value: new Date(date.setHours(15, 30)), label: "15:30" },
      { value: new Date(date.setHours(16)), label: "16:00" },
      { value: new Date(date.setHours(16, 30)), label: "16:30" },
      { value: new Date(date.setHours(17)), label: "17:00" },
      { value: new Date(date.setHours(17, 30)), label: "17:30" },
      { value: new Date(date.setHours(18)), label: "18:00" },
      { value: new Date(date.setHours(18, 30)), label: "18:30" },
      { value: new Date(date.setHours(19)), label: "19:00" },
      { value: new Date(date.setHours(19, 30)), label: "19:30" },
      { value: new Date(date.setHours(20)), label: "20:00" },
      { value: new Date(date.setHours(20, 30)), label: "20:30" },
      { value: new Date(date.setHours(21)), label: "21:00" },
      { value: new Date(date.setHours(21, 30)), label: "21:30" },
      { value: new Date(date.setHours(22)), label: "22:00" },
      { value: new Date(date.setHours(22, 30)), label: "22:30" },
    ]}
    name={name}
    label={label}
  />
  )
}