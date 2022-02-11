import { ApiFn, createHandler } from "$/api";
import { createListPost } from "$/api/list.utils";
import { createItem, translateItem } from "$sql/orm";
import { select } from "$sql";
import { StatusCode } from "@internal/enums";
import { map } from "lodash";

const get: ApiFn = async ({ response }) => {
  const items = map(
    await select(
      "select *, count - (select sum(count) from item_reservation where item_id = item.id) reserved from item order by created_at desc;"
    ),
    translateItem
  );

  return await response
    .status(StatusCode.Ok)
    .json({ items, total: items.length });
};

const name = "item";
export default createHandler({
  get,
  post: createListPost({ name, createFn: createItem }),
});
