import { useEffect, VFC } from "react";
import { useListFetch } from "shared/hooks";
import {
  clientService,
  discountService,
  employeeService,
  itemReservationService,
  itemService,
  priceService,
  schedulerService,
  transactionService,
} from "@services";
import {
  discountsToOptions,
  discountToOption,
  formatTime,
  itemsToOptions,
  peopleToOptions,
  servicePricesToOptions,
} from "shared/utils";
import { style } from "styles";
import { Button, SelectField, TextField } from "shared/components";
import { isSuccess } from "shared/utils/requests";
import { Actions } from "shared/components/Form/Actions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CourtReservation } from "@models";
import { compact, filter } from "lodash";
import { Formik } from "formik";
import { itemPricesToOptions } from "shared/utils/options/prices";
import { formatPrice } from "shared/utils/formats/formatPrice";
import { pendingSchema } from "./Reservation.validation";
import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";
import { concatenateStatuses } from "@internal/enums";
import { differenceInMinutes } from "date-fns";
import { permanentClientDiscountId } from "shared/constants/discounts";

interface Props {
  reservation: CourtReservation.Entity;
  disabled?: boolean;
}

export const ReservationPendingForm: VFC<Props> = ({
  reservation,
  disabled,
}) => {
  const { start, end, courtId, teacherId } = reservation;
  const { refresh } = useSchedulerContext();

  const {
    list: { status: transactionsStatus, items: transactions },
  } = useListFetch(transactionService.readAll);

  const {
    list: { status: itemsStatus, items: items },
  } = useListFetch(itemService.readAll);

  const {
    list: { status: itemReservationsStatus, items: itemReservations },
  } = useListFetch(() =>
    itemReservationService.readAll().then(({ items, ...meta }) => ({
      items: items.filter(
        ({ courtReservationId }) => courtReservationId === reservation.id
      ),
      ...meta,
    }))
  );

  const {
    list: { status: pricesStatus, items: prices },
  } = useListFetch(priceService.readAll);

  const {
    list: { status: employeesStatus, items: employees },
  } = useListFetch(employeeService.readAll);

  const {
    list: { status: clientsStatus, items: clients },
  } = useListFetch(clientService.readAll);

  const {
    list: { status: discountsStatus, items: discounts },
  } = useListFetch(discountService.readAll);

  const {
    discountId = null,
    clientId = null,
    priceId = null,
  } = transactions.find(
    ({ reservationId }) => reservationId === reservation.id
  ) || {};

  const itemsPrices = filter(prices, ["isItem", true]);
  const servicesPrices = filter(prices, ["isItem", false]);
  const teachers = filter(employees, "isTeacher");

  const loading = !isSuccess(
    concatenateStatuses(
      itemsStatus,
      pricesStatus,
      employeesStatus,
      clientsStatus,
      discountsStatus,
      transactionsStatus,
      itemReservationsStatus
    )
  );

  const handleSuccess = async (values: any) => {
    await schedulerService.create(reservation.id, values);
    refresh();
  };
  const handleRemove = async () => {
    await schedulerService.delete(reservation.id);
    refresh();
  };

  const initialValues = {
    courtId,
    teacherId,
    priceId,
    clientId,
    discountId,
    itemReservations,
    reservation: {
      start: formatTime(start),
      end: formatTime(end),
      between: differenceInMinutes(end, start) / 30,
    },
    items,
  };

  return (
    <Formik
      validationSchema={pendingSchema}
      initialValues={initialValues}
      onSubmit={handleSuccess}
      enableReinitialize
      validateOnMount
    >
      {({ handleSubmit, submitForm, isValid, values, setFieldValue }) => {
        const addItem = () =>
          setFieldValue("itemReservations", [
            ...values.itemReservations,
            { itemId: null, count: null, cost: null, priceId: null },
          ]);

        const removeItem = (index: number) => () =>
          setFieldValue(
            "itemReservations",
            values.itemReservations.filter((_, i) => i !== index)
          );

        useEffect(() => {
          const service = prices.find(({ id }) => id === values.priceId);
          if (!service) {
            setFieldValue("cost", null);
            return;
          }

          const { cost: serviceValue } = service;

          const itemsValue = values.itemReservations
            .filter(({ itemId, priceId, count }) => itemId && priceId && count)
            .map(
              ({ priceId, count }) =>
                itemsPrices.find(({ id }) => id === priceId)!.cost * count
            )
            .reduce((acc, cur) => acc + cur, 0);

          let total = serviceValue * values.reservation.between + itemsValue;

          const discount = discounts.find(({ id }) => id === values.discountId);
          if (discount) {
            const discountValue = discount
              ? discount.isPercentage
                ? discount.value / 100
                : discount.value
              : 0;

            total -= discount.isPercentage
              ? total * discountValue
              : discountValue;
          }

          setFieldValue("cost", formatPrice(Math.max(0, total)));
        }, [values, initialValues]);
        useEffect(() => {
          values.itemReservations.map((itemReservation, index) => {
            const price = itemsPrices.find(
              ({ id }) => id === itemReservation.priceId
            );
            if (!price) {
              setFieldValue(`itemReservations.${index}.cost`, null);
              return;
            }

            setFieldValue(
              `itemReservations.${index}.cost`,
              `${(itemReservation.count * price.cost).toFixed(2)}zł`
            );
          });
        }, [values, initialValues]);

        return (
          <form onSubmit={handleSubmit}>
            <div className={style("form--split")}>
              <SelectField
                name="clientId"
                label="Client"
                options={peopleToOptions(clients)}
                loading={loading}
                disabled={disabled}
                onChange={(clientId) => {
                  const client = clients.find(({ id }) => id === clientId);
                  setFieldValue(
                    "discountId",
                    client && client.isPermanent
                      ? permanentClientDiscountId
                      : null
                  );
                }}
              />
              <SelectField
                name="teacherId"
                label="Teacher"
                options={peopleToOptions(teachers)}
                loading={loading}
                disabled={disabled}
              />
            </div>
            <SelectField
              name="discountId"
              label="Discount"
              options={compact([
                ...discountsToOptions(
                  discounts.filter(({ id }) => id !== permanentClientDiscountId)
                ),
                discounts.find(
                  ({ id }) => id === permanentClientDiscountId
                ) && {
                  ...discountToOption(
                    discounts.find(
                      ({ id }) => id === permanentClientDiscountId
                    )!
                  ),
                  disabled: !clients.find(({ id }) => values.clientId === id)
                    ?.isPermanent,
                },
              ])}
              loading={loading}
              disabled={disabled}
            />
            <SelectField
              name="priceId"
              label="Price"
              options={servicePricesToOptions(servicesPrices)}
              loading={loading}
              disabled={disabled}
            />
            {values.itemReservations.map((item, index) => (
              <div className={style("form--split")}>
                <SelectField
                  name={`itemReservations.${index}.itemId`}
                  label="Item"
                  size="small"
                  options={itemsToOptions(items).map(({ value, label }) => ({
                    value,
                    label,
                    disabled: values.itemReservations.some(
                      ({ itemId }) => value === itemId
                    ),
                  }))}
                  loading={loading}
                  disabled={disabled}
                />
                <SelectField
                  name={`itemReservations.${index}.priceId`}
                  label="Price"
                  size="small"
                  options={itemPricesToOptions(itemsPrices)}
                  loading={loading}
                  disabled={disabled || !values.itemReservations[index].itemId}
                />
                <TextField
                  name={`itemReservations.${index}.count`}
                  label="Count"
                  size="small"
                  type="number"
                  disabled={disabled || !values.itemReservations[index].itemId}
                />
                <TextField
                  name={`itemReservations.${index}.cost`}
                  label="cost"
                  size="small"
                  disabled
                />
                {disabled || (
                  <Button icon={<RemoveIcon />} onClick={removeItem(index)} />
                )}
              </div>
            ))}
            {disabled || (
              <Button
                icon={<AddIcon />}
                title="Add item reservation"
                onClick={addItem}
              />
            )}
            <div className={style("form--split")}>
              <TextField name="reservation.start" label="Start" disabled />
              <TextField name="reservation.end" label="End" disabled />
            </div>
            <TextField name="cost" label="Total" disabled />
            <Actions
              onSubmit={
                !disabled && (async () => (await submitForm(), isValid))
              }
              onRemove={disabled && handleRemove}
              disabledSubmit={loading}
              disabledRemove={loading}
            />
          </form>
        );
      }}
    </Formik>
  );
};
