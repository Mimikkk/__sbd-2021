import { $delete } from "./delete";
import { create } from "./create";
import { update } from "./update";
import { read } from "./read";

export const servicant = {
  create,
  read,
  update,
  delete: $delete,
};
