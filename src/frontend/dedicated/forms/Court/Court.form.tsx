import { FormProps } from "dedicated/forms/types";
import { Court } from "@models";
import { courtService } from "@services";
import { courtSchema } from "./Court.validation";
import { isEntity } from "shared/utils";
import { BooleanField, Form, SelectField, TextField } from "shared/components";
import { useListContext } from "shared/contexts";
import { style } from "styles";

const createCourtValues = <T extends Court.Model>(): T =>
  ({
    name: "",
    floor: "",
    isCovered: false,
  } as T);

const coverOptions = [
  { value: "Clay", label: "Clay" },
  { value: "Grass", label: "Grass" },
  { value: "Hard", label: "Hard" },
  { value: "Carpet", label: "Carpet" },
];

export const CourtForm = <T extends Court.Model>({
  initialValues,
}: FormProps<T>) => {
  const { refresh } = useListContext();

  const handleSuccess = async (values: T) => (
    await (isEntity(values)
      ? courtService.update(values.id, values)
      : courtService.create(values)),
    refresh()
  );

  const handleRemove = async (values: T) => (
    await (isEntity(values) && courtService.delete(values.id)), refresh()
  );

  return (
    <Form
      validationSchema={courtSchema}
      initialValues={initialValues || createCourtValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <div className={style("form--split")}>
        <TextField name="name" label="Court name" />
        <SelectField
          options={coverOptions}
          name="floor"
          label="Type of surface"
        />
      </div>
      <BooleanField name="isCovered" label="Is roof covered" />
    </Form>
  );
};
