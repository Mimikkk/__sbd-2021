import { StatusCode } from "@internal/enums";
import { ApiFn, createHandler } from "$/api";
import { run, select, selectLastUpdatedFootprintId } from "$sql";
import { deleteClient, updateClient } from "$sql/orm";

const put: ApiFn = async ({ request, response }) => {
  const { body } = request;
  const { id } = request.query;

  await run(updateClient(id as string, body));
  const [{ id: updatedId, updated_at }] = await select(
    selectLastUpdatedFootprintId("client")
  );

  return response.status(StatusCode.Ok).json({
    message: `successfully updated resource '${updatedId}'.`,
    updatedAt: updated_at,
  });
};

const $delete: ApiFn = async ({ request, response }) => {
  const { id } = request.query;

  await run(deleteClient(id as string));

  return response
    .status(StatusCode.Ok)
    .json({ message: `successfully deleted resource.` });
};

export default createHandler({ put, delete: $delete });
