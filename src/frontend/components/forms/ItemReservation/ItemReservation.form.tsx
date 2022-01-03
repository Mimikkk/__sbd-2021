import { Grid } from "@mui/material";
import { FormProps } from "components/forms/types";
import { Item, ItemReservation } from "@models";
import { itemReservationService, itemService } from "@services";
import { ItemReservationSchema } from "./ItemReservation.validation";
import { isEntity } from "shared/utils";
import {
  DateSelect,
  Form,
  SelectField,
  TextField,
  TimePicker,
} from "shared/components";
import { useListContext } from "shared/contexts";
import { useFormReducer } from "components/hooks";
import { useEffect, useMemo, useState } from "react";

const createItemReservationValues = <T extends ItemReservation.Model>(): T =>
  ({
    count: 0,
    end: new Date(),
    itemId: "",
    start: new Date(),
  } as T);

export const ItemReservationForm = <T extends ItemReservation.Model>({
  initialValues,
}: FormProps<T>) => {
  const { refresh } = useListContext();

  const handleSuccess = async (values: T) => (
    await (isEntity(values)
      ? itemReservationService.update(values.id, values)
      : itemReservationService.create(values)),
    refresh()
  );

  const handleRemove = async (values: T) => (
    await (isEntity(values) && itemReservationService.delete(values.id)),
    refresh()
  );

  const { date, setDate } = useFormReducer();

  const [items, setItems] = useState<Item.Entity[]>([]);
  useEffect(() => {
    itemService
      .readAll()
      .then(({ items }) => setItems(items.filter(({ name, id }) => name)));
  }, []);

  return (
    <Form
      validationSchema={ItemReservationSchema}
      initialValues={initialValues || createItemReservationValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <SelectField
            name={"itemId"}
            label={"ItemID"}
            options={items.map((item) => new Option(item.name, item.id))}
          />
        </Grid>
        <Grid item xs={12}>
          <DateSelect
            date={date}
            onChange={setDate}
            min={useMemo(() => new Date(), [])}
          />
        </Grid>
        <Grid item xs={12}>
          <TimePicker date={date} name={"start"} label={"Start time"} />
        </Grid>
        <Grid item xs={12}>
          <TimePicker date={date} name={"end"} label={"End time"} />
        </Grid>
        <Grid item xs={12}>
          <TextField name="count" label="Count" />
        </Grid>
      </Grid>
    </Form>
  );
};
