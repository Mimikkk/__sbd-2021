import { StatusCode } from "@internal/enums";
import { ApiFn, createHandler } from "$/api";
import { run, select, selectNewestFootprintId, selectWith } from "$sql";
import { createCourt, translateClient } from "$sql/orm";

const get: ApiFn = async ({ response }) => {
  const items = (await selectWith(
    translateClient
  )`select * from client order by created_at desc`) as [];

  return response.status(StatusCode.Ok).json({ items, total: items.length });
};

const post: ApiFn = async ({ request, response }) => {
  const { body } = request;

  await run(createCourt(body));
  const [{ id, created_at }] = await select(selectNewestFootprintId("client"));

  await response.status(StatusCode.Created).json({
    message: `successfully created new resource '${id}'.`,
    createdAt: created_at,
  });
};

export default createHandler({ get, post });
