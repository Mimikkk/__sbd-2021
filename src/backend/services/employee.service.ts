import { Employee } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";

const url = "api/employees";

export const employeeService = {
  create: (item: Employee.Model) =>
    servicant.create({ url, item, successMessage: "Added a new employee" }),

  readAll: () => servicant.read<ListResponse<Employee.Entity>>({ url }),

  update: (id: uuid, item: Employee.Model) =>
    servicant.update<Employee.Model>({
      url,
      item,
      id,
      successMessage: "Updated a client",
    }),

  delete: (id: uuid) =>
    servicant.delete({ url, id, successMessage: "Removed a client" }),
};
