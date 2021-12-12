import { NextApiResponse, NextApiRequest } from "next";
import { selectWith } from "$sql";
import { translateReservation } from "$sql/orm";

const get = async (response: NextApiResponse) => {
  const items = (await selectWith(
    translateReservation
  )`select * from reservation order by created_at desc`) as [];
  return response.status(200).json({ items, total: items.length });
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
      return response.status(405).end();
  }
};
