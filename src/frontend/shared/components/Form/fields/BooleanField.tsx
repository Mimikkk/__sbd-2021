import { VFC } from "react";
import { SelectField } from "shared/components/Form/fields/SelectField";

interface Props {
  name: string;
  label: string;
  onChange?: (value: boolean) => void;
}
export const BooleanField: VFC<Props> = ({ label, name, onChange }) => (
  <SelectField
    options={[
      { value: true, label: "Yes" },
      { value: false, label: "No" },
    ]}
    name={name}
    label={label}
    onChange={onChange as any}
  />
);
