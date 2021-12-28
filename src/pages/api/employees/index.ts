import { createHandler } from "$/api";
import { createListGet, createListPost } from "$/api/list.utils";
import { translateEmployee, createEmployee } from "$sql/orm";

const name = "employee";
export default createHandler({
  get: createListGet({ name, translateFn: translateEmployee }),
  post: createListPost({ name, createFn: createEmployee }),
});
