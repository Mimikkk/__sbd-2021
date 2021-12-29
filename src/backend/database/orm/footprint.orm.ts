import { BaseModel } from "@models";
import { SqlMap } from "$sql/orm/utils";
import { identity } from "lodash";

export const footprintTranslation: SqlMap<BaseModel> = {
  id: identity,
  createdAt: (value) => new Date(value),
  updatedAt: (value) => value && new Date(value),
};
