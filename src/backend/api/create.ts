import { NextApiRequest, NextApiResponse } from "next";
import { StatusCode } from "@internal/enums";
import { isNil, omitBy } from "lodash";

interface ApiFnProps {
  request: NextApiRequest;
  response: NextApiResponse;
}
export type ApiFn = (props: ApiFnProps) => void | Promise<void>;

interface Props {
  get?: ApiFn;
  post?: ApiFn;
  put?: ApiFn;
  delete?: ApiFn;
  patch?: ApiFn;
}
export const createHandler = ({ get, post, put, patch, ...props }: Props) => {
  const api = omitBy(
    { GET: get, POST: post, PUT: put, DELETE: props.delete, PATCH: patch },
    isNil
  );

  return (request: NextApiRequest, response: NextApiResponse) =>
    api[request.method as string]?.({ request, response }) ||
    response.status(StatusCode.Forbidden).end();
};
