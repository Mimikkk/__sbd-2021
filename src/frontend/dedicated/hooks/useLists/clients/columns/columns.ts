import { BoolCell, Column, OptionalCell } from "shared/components";
import { Client } from "@models";
import { EditCell } from './EditCell';

export const columns: Column<Client.Row>[] = [
  {
    accessor: "name",
    Header: "Name",
  },
  {
    accessor: "surname",
    Header: "Surname",
  },
  {
    accessor: "address",
    Header: "Address",
  },
  {
    accessor: "birthdate",
    Header: "Birthdate",
  },
  {
    accessor: "phone",
    Header: "Phone",
  },
  {
    accessor: "email",
    Header: "Email",
    Cell: OptionalCell,
  },
  {
    accessor: "isPermanent",
    Header: "Is permanent",
    Cell: BoolCell,
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
