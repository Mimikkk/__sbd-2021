import { VFC } from "react";
import { SelectField } from "shared/components/Form/fields/SelectField";

interface Props {
  name: string;
  label: string;
  onChange?: (value: boolean) => void;
}
export const BooleanField: VFC<Props> = (props) => (
  <SelectField
    options={[
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ]}
    name={props.name}
    label={props.label}
    onChange={props.onChange}
  />
);
