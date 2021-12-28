import { Button, Tile } from "shared/components";
import {
  clientService,
  courtReservationService,
  employeeService,
  itemReservationService,
} from "@services";
import { useListContext } from "shared/contexts";
import { Client, CourtReservation, Employee, ItemReservation } from "@models";
import faker from "faker";
import { useClientList } from "components/hooks/useClientList";
import { useEmployeeList } from "components/hooks/useEmployeeList";
import { useCourtReservationList } from "components/hooks/useCourtReservationList";
import { useItemReservationList } from "components/hooks/useItemReservationList";
import { addDays } from "date-fns";

export const CreateCourtReservationButton = () => {
  const { refresh } = useListContext();

  return (
    <Button
      title={"create random"}
      onClick={async () => {
        await courtReservationService.create({
          courtId: faker.lorem.word(),
          start: new Date(),
          end: addDays(new Date(), 1),
          isLesson: faker.datatype.boolean(),
        });
        refresh();
      }}
    />
  );
};
export const EditCourtReservationButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<CourtReservation.Row>();

  return (
    <Button
      title={"update random"}
      onClick={async () => {
        await courtReservationService.update(item.id, {
          courtId: faker.lorem.word(),
          teacherId: faker.lorem.word(),
          start: new Date(),
          end: addDays(new Date(), 1),
          isLesson: faker.datatype.boolean(),
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
  const { refresh } = useListContext();

  return (
    <Button
      title={"create random"}
      onClick={async () => {
        await itemReservationService.create({
          itemId: faker.lorem.word(),
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
  const {
    refresh,
    items: [item],
  } = useListContext<ItemReservation.Row>();

  return (
    <Button
      title={"update random"}
      onClick={async () => {
        await itemReservationService.update(item.id, {
          itemId: faker.lorem.word(),
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
