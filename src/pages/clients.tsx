import { Button, Tile } from "shared/components";
import { useClientList } from "components/hooks/useClientList";
import { clientService } from "@services";
import { useListContext } from "shared/contexts";
import faker from "faker";
import { Client } from "@models";

export const CreateButton = () => {
  const { refresh } = useListContext();

  return (
    <Button
      title={"create random"}
      onClick={async () => {
        await clientService.create({
          name: faker.name.firstName(),
          surname: faker.name.lastName(),
          isPermanent: faker.datatype.boolean(),
          address: faker.address.cityName(),
          email: faker.internet.email(),
          birthdate: faker.date.recent(),
          phone: faker.phone.phoneNumber(),
        });
        refresh();
      }}
    />
  );
};
export const EditButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<Client.Row>();

  return (
    <Button
      title={"update random"}
      onClick={async () => {
        await clientService.update(item.id, {
          name: faker.name.firstName(),
          surname: faker.name.lastName(),
          isPermanent: faker.datatype.boolean(),
          address: faker.address.cityName(),
          email: faker.internet.email(),
          birthdate: faker.date.recent(),
          phone: faker.phone.phoneNumber(),
        });
        refresh();
      }}
      disabled={!item}
    />
  );
};
export const DeleteButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<Client.Row>();

  return (
    <Button
      title={"delete random"}
      onClick={() => clientService.delete(item.id).then(refresh)}
      disabled={!item}
    />
  );
};

export default () => {
  const [ClientList, ClientListContext] = useClientList();

  return (
    <Tile>
      <ClientListContext>
        <ClientList />
        <CreateButton />
        <EditButton />
        <DeleteButton />
      </ClientListContext>
    </Tile>
  );
};
