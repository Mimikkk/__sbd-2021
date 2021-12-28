import { Button, Tile } from "shared/components";
import { clientService, employeeService } from "@services";
import { useListContext } from "shared/contexts";
import { Client, Employee } from "@models";
import faker from "faker";
import { useClientList } from "components/hooks/useClientList";
import { useEmployeeList } from "components/hooks/useEmployeeList";

export const CreateClientButton = () => {
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
export const EditClientButton = () => {
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
export const DeleteClientButton = () => {
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

export const CreateEmployeeButton = () => {
  const { refresh } = useListContext();

  return (
    <Button
      title={"create random"}
      onClick={async () => {
        await employeeService.create({
          name: faker.name.firstName(),
          surname: faker.name.lastName(),
          address: faker.address.cityName(),
          email: faker.internet.email(),
          birthdate: faker.date.recent(),
          phone: faker.phone.phoneNumber(),
          payroll: faker.datatype.number({
            min: 1000,
            max: 10000,
            precision: 2,
          }),
          isTeacher: faker.datatype.boolean(),
          bankAccount: faker.finance.account(),
        });
        refresh();
      }}
    />
  );
};
export const EditEmployeeButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<Employee.Row>();

  return (
    <Button
      title={"update random"}
      onClick={async () => {
        await employeeService.update(item.id, {
          name: faker.name.firstName(),
          surname: faker.name.lastName(),
          address: faker.address.cityName(),
          email: faker.internet.email(),
          birthdate: faker.date.recent(),
          phone: faker.phone.phoneNumber(),
          payroll: faker.datatype.number({
            min: 1000,
            max: 10000,
            precision: 2,
          }),
          isTeacher: faker.datatype.boolean(),
          bankAccount: faker.finance.account(),
        });
        refresh();
      }}
      disabled={!item}
    />
  );
};
export const DeleteEmployeeButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<Employee.Row>();

  return (
    <Button
      title={"delete random"}
      onClick={() => employeeService.delete(item.id).then(refresh)}
      disabled={!item}
    />
  );
};

export default () => {
  const [EmployeeList, EmployeeListContext] = useEmployeeList();
  const [ClientList, ClientListContext] = useClientList();

  return (
    <Tile>
      <EmployeeListContext>
        <p>Employees</p>
        <EmployeeList />
        <CreateEmployeeButton />
        <EditEmployeeButton />
        <DeleteEmployeeButton />
      </EmployeeListContext>
      <ClientListContext>
        <p>Clients</p>
        <ClientList />
        <CreateClientButton />
        <EditClientButton />
        <DeleteClientButton />
      </ClientListContext>
    </Tile>
  );
};
