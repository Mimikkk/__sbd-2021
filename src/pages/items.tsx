import { Button, Tile } from "shared/components";
import {
  clientService,
  courtReservationService,
  employeeService,
  itemReservationService,
  itemService,
} from "@services";
import { useListContext } from "shared/contexts";
import {
  Client,
  CourtReservation,
  Employee,
  Item,
  ItemReservation,
} from "@models";
import faker from "faker";
import { useClientList } from "components/hooks/useClientList";
import { useEmployeeList } from "components/hooks/useEmployeeList";
import { useCourtReservationList } from "components/hooks/useCourtReservationList";
import { useItemReservationList } from "components/hooks/useItemReservationList";
import { addDays } from "date-fns";
import { useItemList } from "components/hooks/useItemList/useItemList";

export const CreateItemButton = () => {
  const { refresh } = useListContext();

  return (
    <Button
      title={"create random"}
      onClick={async () => {
        await itemService.create({
          name: faker.lorem.word(),
          count: faker.datatype.number({ min: 20, max: 100 }),
          description: faker.lorem.sentence(),
        });
        refresh();
      }}
    />
  );
};
export const EditItemButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<Item.Row>();

  return (
    <Button
      title={"update random"}
      onClick={async () => {
        await itemService.update(item.id, {
          name: faker.lorem.word(),
          count: faker.datatype.number({ min: 20, max: 100 }),
          description: faker.lorem.sentence(),
        });
        refresh();
      }}
      disabled={!item}
    />
  );
};
export const DeleteItemButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<Item.Row>();

  return (
    <Button
      title={"delete random"}
      onClick={() => courtReservationService.delete(item.id).then(refresh)}
      disabled={!item}
    />
  );
};

export default () => {
  const [ItemList, ItemListContext] = useItemList();

  return (
    <Tile>
      <ItemListContext>
        <ItemList />
        <CreateItemButton />
        <EditItemButton />
        <DeleteItemButton />
      </ItemListContext>
    </Tile>
  );
};
