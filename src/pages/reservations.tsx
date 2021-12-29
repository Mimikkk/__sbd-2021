import { Button, Tile } from "shared/components";
import {
  courtReservationService,
  courtService,
  employeeService,
  itemReservationService,
  itemService,
} from "@services";
import { useListContext } from "shared/contexts";
import {
  Court,
  CourtReservation,
  Employee,
  Item,
  ItemReservation,
} from "@models";
import faker from "faker";
import {
  useCourtReservationList,
  useItemReservationList,
} from "components/hooks";
import { addDays } from "date-fns";
import { useEffect, useState } from "react";
import { sample } from "lodash";

export const CreateCourtReservationButton = () => {
  const [courts, setCourts] = useState<Court.Entity[]>([]);

  useEffect(() => {
    courtService.readAll().then(({ items }) => setCourts(items));
  }, []);

  const { refresh } = useListContext();

  return (
    <Button
      title={`create c:${courts.length} random`}
      onClick={async () => {
        const model = {
          courtId: sample(courts)!.id,
          teacherId: null,
          start: new Date(),
          end: addDays(new Date(), 1),
          isLesson: faker.datatype.boolean(),
        };

        await courtReservationService.create(model);
        refresh();
      }}
    />
  );
};
export const EditCourtReservationButton = () => {
  const [courts, setCourts] = useState<Court.Entity[]>([]);
  const [teachers, setTeachers] = useState<Employee.Entity[]>([]);

  useEffect(() => {
    courtService.readAll().then(({ items }) => setCourts(items));
  }, []);
  useEffect(() => {
    employeeService
      .readAll()
      .then(({ items }) =>
        setTeachers(items.filter(({ isTeacher }) => isTeacher))
      );
  }, []);

  const {
    refresh,
    items: [item],
  } = useListContext<CourtReservation.Row>();

  return (
    <Button
      title={`create ${courts.length} ${teachers.length} random`}
      onClick={async () => {
        await courtReservationService.update(item.id, {
          courtId: sample(courts)!.id,
          teacherId: sample(teachers)!.id,
          start: new Date(),
          end: addDays(new Date(), 1),
        });
        refresh();
      }}
      disabled={!item}
    />
  );
};
export const DeleteCourtReservationButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<CourtReservation.Row>();

  return (
    <Button
      title={"delete random"}
      onClick={() => courtReservationService.delete(item.id).then(refresh)}
      disabled={!item}
    />
  );
};

export const CreateItemReservationButton = () => {
  const [items, setItems] = useState<Item.Entity[]>([]);

  useEffect(() => {
    itemService.readAll().then(({ items }) => setItems(items));
  }, []);

  const { refresh } = useListContext();

  return (
    <Button
      title={`create ${items.length} random`}
      onClick={async () => {
        await itemReservationService.create({
          itemId: sample(items)!.id,
          start: new Date(),
          end: addDays(new Date(), 1),
          count: faker.datatype.number({ min: 1, max: 10 }),
        });
        refresh();
      }}
    />
  );
};
export const EditItemReservationButton = () => {
  const [items, setItems] = useState<Item.Entity[]>([]);

  useEffect(() => {
    itemService.readAll().then(({ items }) => setItems(items));
  }, []);

  const {
    refresh,
    items: [item],
  } = useListContext<ItemReservation.Row>();

  return (
    <Button
      title={`create ${items.length} random`}
      onClick={async () => {
        await itemReservationService.update(item.id, {
          itemId: sample(items)!.id,
          start: new Date(),
          end: addDays(new Date(), 1),
          count: faker.datatype.number({ min: 1, max: 10 }),
        });
        refresh();
      }}
      disabled={!item}
    />
  );
};
export const DeleteItemReservationButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<ItemReservation.Row>();

  return (
    <Button
      title={"delete random"}
      onClick={() => itemReservationService.delete(item.id).then(refresh)}
      disabled={!item}
    />
  );
};

export default () => {
  const [CourtReservationList, CourtReservationListContext] =
    useCourtReservationList();
  const [ItemReservationList, ItemReservationListContext] =
    useItemReservationList();

  return (
    <Tile>
      <CourtReservationListContext>
        <CourtReservationList />
        <CreateCourtReservationButton />
        <EditCourtReservationButton />
        <DeleteCourtReservationButton />
      </CourtReservationListContext>
      <ItemReservationListContext>
        <ItemReservationList />
        <CreateItemReservationButton />
        <EditItemReservationButton />
        <DeleteItemReservationButton />
      </ItemReservationListContext>
    </Tile>
  );
};
