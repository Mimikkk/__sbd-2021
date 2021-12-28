import { BoolCell, Column, OptionalCell } from "shared/components";
import { Employee } from "@models";

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
    Header: "Is a teacher",
    Cell: BoolCell,
  },
  {
    accessor: "payroll",
    Header: "Payroll",
  },
  {
    accessor: "bankAccount",
    Header: "Bank account",
  },
];
