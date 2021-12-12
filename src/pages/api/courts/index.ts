import { NextApiRequest, NextApiResponse } from "next";
import { run, select, selectWith } from "$sql";
import { translateCourt, createCourt, selectNewestCourtId } from "$sql/orm";
import { StatusCode } from "@internal/enums";

const get = async (response: NextApiResponse) => {
  const items = (await selectWith(
    translateCourt
  )`select * from court order by created_at desc`) as [];
  return response.status(StatusCode.Ok).json({ items, total: items.length });
};

const post = async (request: NextApiRequest, response: NextApiResponse) => {
  const { body } = request;

  await run(createCourt(body));
  const [{ id, created_at }] = await select(selectNewestCourtId());

  await response.status(StatusCode.Created).json({
    message: `successfully created new resource '${id}'.`,
    createdAt: created_at,
  });
};

export default async (request: NextApiRequest, response: NextApiResponse) => {
  switch (request.method) {
    case "GET":
      await get(response);
      break;
    case "POST":
      await post(request, response);
      break;
    default:
      return response.status(StatusCode.Forbidden).end();
  }
};
