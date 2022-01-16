import { BoolCell, Column, OptionalCell } from "shared/components";
import { Employee } from "@models";
import { EditCell } from "./EditCell";
import { format } from "date-fns";
import { PriceCell } from "./PriceCell";

export const columns: Column<Employee.Row>[] = [
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
    Cell: ({ value }) => format(new Date(value), "dd-MM-yyyy"),
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
    accessor: "isTeacher",
    Header: "Teacher",
    Cell: BoolCell,
  },
  {
    id: "payroll",
    Header: "Payroll",
    Cell: PriceCell("payroll"),
  },
  {
    accessor: "bankAccount",
    Header: "Bank account",
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
