import { NextApiResponse, NextApiRequest } from "next";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  return response.status(405).end();
};
