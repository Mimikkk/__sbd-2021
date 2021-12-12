import { NextApiResponse, NextApiRequest } from "next";
import { StatusCode } from "@internal/enums";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  return response.status(StatusCode.Forbidden).end();
};
