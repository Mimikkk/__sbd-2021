import { ApiFn, createHandler } from "$/api";
import { execute, select } from "$sql";
import { str } from "$sql/orm/utils";
import { StatusCode } from "@internal/enums";
import {
  createItemReservation,
  createTransaction,
  updateCourtReservation,
} from "$sql/orm";
import { ItemReservation } from "@models";
import { uuid } from "@internal/types";
import {
  courtReservationService,
  itemReservationService,
  transactionService,
} from "@services";

const post: ApiFn = async ({ request, response }) => {
  const {
    body: { itemReservations, clientId, discountId, priceId, teacherId },
  } = request;
  const courtReservationId = request.query.id as string;

  const [{ court_id: courtId, is_reserved: isReserved, start, end }] =
    await select(
      `select court_id,
              "start",
              "end",
              exists(select * from transaction where reservation_id = cr.id)
                as is_reserved
       from court_reservation cr
       where id = ${str(courtReservationId)}`
    );

  if (isReserved) {
    return await response.status(StatusCode.Teapot).json({
      message: `Reservation already made. refresh to see changes`,
    });
  }

  await Promise.all(
    [
      updateCourtReservation(courtReservationId, {
        teacherId,
        courtId,
        start,
        end,
      }),
      ...itemReservations.map(
        ({ itemId, priceId, count }: ItemReservation.Model) =>
          createItemReservation({
            courtReservationId,
            priceId,
            itemId,
            count,
            start,
            end,
          })
      ),
    ].map(execute)
  );

  const reservations: { item_reservation_id: uuid; price_id: uuid }[] =
    await select(
      `select id as item_reservation_id, price_id
       from item_reservation
       where court_reservation_id = '${courtReservationId}'`
    );

  await Promise.all(
    [
      createTransaction({
        reservationId: courtReservationId,
        discountId,
        clientId,
        priceId,
      }),
      ...reservations.map(({ item_reservation_id, price_id }) =>
        createTransaction({
          reservationId: item_reservation_id,
          priceId: price_id,
          discountId,
          clientId,
        })
      ),
    ].map(execute)
  );

  return await response.status(StatusCode.Created).json({
    message: `successfully created transaction bundle`,
  });
};

const $delete: ApiFn = async ({ request, response }) => {
  const { body } = request;
  const {
    courtReservationId,
    itemReservationIds,
    itemReservations,
    transactions,
  } = body;

  await Promise.all(itemReservationIds.map(itemReservationService.delete));
  await courtReservationService.delete(courtReservationId);

  const itemTransactionsIds = itemReservations
    .filter(
      ({ courtReservationId }: any) => courtReservationId === courtReservationId
    )
    .flatMap(({ id }: any) => id);
  await Promise.all(itemTransactionsIds.map(transactionService.delete));

  const courtTransactionId = transactions.find(
    ({ reservationId }: any) => reservationId === courtReservationId
  )?.id;

  if (!courtTransactionId) return;
  await transactionService.delete(courtTransactionId);

  return await response.status(StatusCode.Created).json({
    message: `successfully created transaction bundle`,
  });
};

export default createHandler({ post, delete: $delete });
