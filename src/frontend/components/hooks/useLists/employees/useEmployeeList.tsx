import { useList } from "shared/hooks";
import { columns } from "./columns";
import { Employee } from "@models";
import { employeeService } from "$/services";

export const useEmployeeList = () => {
  const [Items, Context] = useList<Employee.Row>(employeeService.readAll);

  return [() => <Items columns={columns} pagination />, Context] as const;
};
