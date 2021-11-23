import { NextApiRequest, NextApiResponse } from "next";
import { run, select, selectWith } from "$sql";
import {
  translateCourt,
  createCourt,
  deleteCourt,
  updateCourt,
  selectLastUpdatedCourtId,
} from "$sql/orm";

const get = async (response: NextApiResponse) => {
  const items = (await selectWith(translateCourt)`select * from courts`) as [];
  return response.status(200).json({ items, total: items.length });
};

const post = async (request: NextApiRequest, response: NextApiResponse) => {
  const { body } = request;

  await run(createCourt(body));
  const [{ id, created_at }] = await select(selectLastUpdatedCourtId());

  await response.status(200).json({
    createdAt: created_at,
    message: `successfully created new resource '${id}'.`,
  });
};

const put = async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    body: { data },
  } = request;
  const id = "4";
  await run(updateCourt(id, data));
  response.status(200);
};
const $delete = async (request: NextApiRequest, response: NextApiResponse) => {
  await run(deleteCourt("4"));
  response.status(200);
};

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  switch (request.method) {
    case "GET":
      await get(response);
      break;
    case "POST":
      await post(request, response);
      break;
    case "PUT":
      await put(request, response);
      break;
    case "DELETE":
      await $delete(request, response);
      break;
    default:
      return response.status(405).end();
  }
};

export default handler;
