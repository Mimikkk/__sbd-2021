import { NextApiResponse, NextApiRequest } from "next";
import { selectWith } from "$sql";
import { translateReservation } from "$sql/orm";
import { StatusCode } from "@internal/enums";

const get = async (response: NextApiResponse) => {
  const items = (await selectWith(
    translateReservation
  )`select * from reservation order by created_at desc`) as [];
  return response.status(StatusCode.Ok).json({ items, total: items.length });
};

export default async (request: NextApiRequest, response: NextApiResponse) => {
  switch (request.method) {
    case "GET":
      await get(response);
      break;
    // case "POST":
    //   await post(request, response);
    //   break;
    default:
      return response.status(StatusCode.Forbidden).end();
  }
};
