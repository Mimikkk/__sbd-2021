import { run, select, selectLastUpdatedFootprintId } from "$sql";
import { deleteCourt, updateCourt } from "$sql/orm";
import { StatusCode } from "@internal/enums";
import { ApiFn, createHandler } from "$/api";

const put: ApiFn = async ({ request, response }) => {
  const { body } = request;
  const { id } = request.query;

  await run(updateCourt(id as string, body));
  const [{ id: updatedId, updated_at }] = await select(
    selectLastUpdatedFootprintId("client")
  );

  await response.status(StatusCode.Ok).json({
    message: `successfully updated resource '${updatedId}'.`,
    updatedAt: updated_at,
  });
};

const $delete: ApiFn = async ({ request, response }) => {
  const { id } = request.query;

  await run(deleteCourt(id as string));

  await response
    .status(StatusCode.Ok)
    .json({ message: `successfully deleted resource.` });
};

export default createHandler({ put, delete: $delete });
