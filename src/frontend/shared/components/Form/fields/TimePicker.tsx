import { SelectField } from './SelectField';
import { VFC } from 'react';

export interface Props {
  date: Date;
  name: string;
  label: string;
  onChange?: (value: Date) => void;
}

export const TimePicker: VFC<Props> = ({ date, name, label, onChange}) => {
      return(
              <SelectField
                options={[
                      { value: new Date(date.setHours(8, 0)), label: "08:00" },
                      { value: new Date(date.setHours(8, 30)), label: "08:30" },
                      { value: new Date(date.setHours(9, 0)), label: "09:00" },
                      { value: new Date(date.setHours(9, 30)), label: "09:30" },
                      { value: new Date(date.setHours(10, 0)), label: "10:00" },
                      { value: new Date(date.setHours(10, 30)), label: "10:30" },
                      { value: new Date(date.setHours(11, 0)), label: "11:00" },
                      { value: new Date(date.setHours(11, 30)), label: "11:30" },
                      { value: new Date(date.setHours(12, 0)), label: "12:00" },
                      { value: new Date(date.setHours(12, 30)), label: "12:30" },
                      { value: new Date(date.setHours(13, 0)), label: "13:00" },
                      { value: new Date(date.setHours(13, 30)), label: "13:30" },
                      { value: new Date(date.setHours(14, 0)), label: "14:00" },
                      { value: new Date(date.setHours(14, 30)), label: "14:30" },
                      { value: new Date(date.setHours(15, 0)), label: "15:00" },
                      { value: new Date(date.setHours(15, 30)), label: "15:30" },
                      { value: new Date(date.setHours(16, 0)), label: "16:00" },
                      { value: new Date(date.setHours(16, 30)), label: "16:30" },
                      { value: new Date(date.setHours(17, 0)), label: "17:00" },
                      { value: new Date(date.setHours(17, 30)), label: "17:30" },
                      { value: new Date(date.setHours(18, 0)), label: "18:00" },
                      { value: new Date(date.setHours(18, 30)), label: "18:30" },
                      { value: new Date(date.setHours(19, 0)), label: "19:00" },
                      { value: new Date(date.setHours(19, 30)), label: "19:30" },
                      { value: new Date(date.setHours(20, 0)), label: "20:00" },
                      { value: new Date(date.setHours(20, 30)), label: "20:30" },
                      { value: new Date(date.setHours(21, 0)), label: "21:00" },
                      { value: new Date(date.setHours(21, 30)), label: "21:30" },
                      { value: new Date(date.setHours(22, 0)), label: "22:00" },
                      { value: new Date(date.setHours(22, 30)), label: "22:30" },
                ]}
                name={name}
                label={label}
              />
  )
}