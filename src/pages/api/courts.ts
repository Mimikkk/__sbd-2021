import { times } from "lodash";
import { mockCourt } from "@models/values";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json({
    items: times(4, () => mockCourt()),
    total: 4,
  });
};

export default handler;
