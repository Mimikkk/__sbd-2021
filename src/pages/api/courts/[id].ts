import { run, select } from "$sql";
import { deleteCourt, selectLastUpdatedCourtId, updateCourt } from "$sql/orm";
import { NextApiResponse, NextApiRequest } from "next";

const put = async (request: NextApiRequest, response: NextApiResponse) => {
  const { body } = request;
  const { id } = request.query;

  await run(updateCourt(id as string, body));
  const [{ id: updatedId, updated_at }] = await select(
    selectLastUpdatedCourtId()
  );

  await response.status(200).json({
    message: `successfully updated resource '${updatedId}'.`,
    updatedAt: updated_at,
  });
};

const $delete = async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;

  await run(deleteCourt(id as string));

  await response
    .status(200)
    .json({ message: `successfully deleted resource.` });
};

export default async (request: NextApiRequest, response: NextApiResponse) => {
  switch (request.method) {
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
