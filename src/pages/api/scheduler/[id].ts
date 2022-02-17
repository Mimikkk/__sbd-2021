import { ApiFn, createHandler } from "$/api";
import { execute, select } from "$sql";
import { nil, str } from "$sql/orm/utils";
import { StatusCode } from "@internal/enums";

const post: ApiFn = async ({ request, response }) => {
  const {
    body: { itemReservations, clientId, discountId, priceId, teacherId },
  } = request;
  const courtReservationId = request.query.id as string;

  const [{ status_code: statusCode }] = await select(
    `select create_schedule(
      ${str(JSON.stringify(itemReservations))},
      ${str(courtReservationId)}, 
      ${str(clientId)}, 
      ${nil(discountId)}, 
      ${nil(teacherId)},
      ${str(priceId)}
      ) status_code`
  );
  if (statusCode === StatusCode.Teapot) {
    return response.status(StatusCode.Teapot).json({
      message: `Reservation made earlier`,
    });
  }
  return response.status(StatusCode.Created).json({
    message: `successfully created transaction bundle`,
  });
};

const $delete: ApiFn = async ({ request, response }) => {
  const courtReservationId = request.query.id as string;

  await execute(`call remove_schedule('${courtReservationId}')`);

  return response.status(StatusCode.Created).json({
    message: `successfully deleted transaction bundle`,
  });
};

export default createHandler({ post, delete: $delete });
