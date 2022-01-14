import { FormProps } from "dedicated/forms/types";
import { Item, ItemReservation } from "@models";
import { itemReservationService, itemService } from "@services";
import { ItemReservationSchema } from "./ItemReservation.validation";
import { isEntity, itemsToOptions } from "shared/utils";
import {
  DateSelect,
  Form,
  SelectField,
  TextField,
  HourField,
} from "shared/components";
import { useListContext } from "shared/contexts";
import { useDate } from "shared/hooks";
import React, { useEffect, useMemo, useState } from "react";
import { addDays } from "date-fns";
import { style } from "styles";

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

  const { date, setDate } = useDate();

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
      <SelectField name="itemId" label="Name" options={itemsToOptions(items)} />
      <DateSelect
        date={date}
        onChange={setDate}
        min={useMemo(() => new Date(addDays(date, 1)), [])}
        max={useMemo(() => new Date(addDays(date, 15)), [])}
      />
      <div className={style("form--split")}>
        <HourField
          name="start"
          label="Start time"
          minHour={7}
          maxHour={22}
          minutesStep={30}
          day={date}
        />
        <HourField
          name="end"
          label="End time"
          minHour={7}
          maxHour={22}
          minutesStep={30}
          day={date}
        />
      </div>
      <TextField name="count" label="Count" />
    </Form>
  );
};
