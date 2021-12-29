import { Button, Tile } from "shared/components";
import { itemService } from "@services";
import { useListContext } from "shared/contexts";
import { Item } from "@models";
import faker from "faker";
import { useItemList } from "components/hooks";

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
      onClick={() => itemService.delete(item.id).then(refresh)}
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
