import { VFC } from "react";
import { useListFetch } from "shared/hooks";
import {
  clientService,
  discountService,
  employeeService,
  itemService,
  priceService,
  transactionService,
} from "@services";
import { formatTime, itemsToOptions, peopleToOptions } from "shared/utils";
import { style } from "styles";
import { Button, SelectField, TextField } from "shared/components";
import { isSuccess } from "shared/utils/requests";
import { Actions } from "shared/components/Form/Actions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CourtReservation } from "@models";
import { object, Schema, string, array, number } from "yup";
import { filter } from "lodash";
import { Formik } from "formik";

interface FormValues {}
export const pendingSchema: Schema<FormValues> = object<any>({
  clientId: string().required("Client is required").nullable(),
  discountId: string().nullable(),
  teacherId: string().nullable(),
  items: array()
    .of(
      object<any>({
        id: string().required("Item is required").nullable(),
        count: number().required("Count is required").min(1).nullable(),
      })
    )
    .min(0)
    .required(),
}).defined();

interface Props {
  reservation: CourtReservation.Entity;
  disabled?: boolean;
}

export const ReservationPendingForm: VFC<Props> = ({
  reservation,
  disabled,
}) => {
  const { start, end, courtId, teacherId } = reservation;

  const {
    list: { items: transactions },
  } = useListFetch(transactionService.readAll);

  const { discountId = null, clientId = null } =
    transactions.find(
      ({ reservationId }) => reservationId === reservation.id
    ) || {};

  const item = transactions.filter(
    ({ reservationId, clientId }) =>
      reservationId !== reservation.id && clientId
  );

  const {
    list: { status: itemsStatus, items: items },
  } = useListFetch(itemService.readAll);

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

  const teachers = filter(employees, "isTeacher");

  const handleSuccess = async (values: any) => {
    console.log({ values });
  };

  return (
    <Formik
      validationSchema={pendingSchema}
      initialValues={{
        courtId,
        teacherId,
        clientId,
        discountId,
        items: [],
        reservation: {
          start: formatTime(start),
          end: formatTime(end),
        },
      }}
      onSubmit={handleSuccess}
      enableReinitialize
      validateOnMount
    >
      {({ handleSubmit, submitForm, isValid, values, setFieldValue }) => {
        const addItem = () =>
          setFieldValue("items", [...values.items, { id: null, count: null }]);

        const removeItem = (index: number) => () =>
          setFieldValue(
            "items",
            values.items.filter((_, i) => i !== index)
          );

        return (
          <form onSubmit={handleSubmit}>
            <div className={style("form--split")}>
              <SelectField
                name="clientId"
                label="Client"
                options={peopleToOptions(clients)}
                loading={!isSuccess(clientsStatus)}
                disabled={disabled}
              />
              <SelectField
                name="teacherId"
                label="Teacher"
                options={peopleToOptions(teachers)}
                loading={!isSuccess(employeesStatus)}
                disabled={disabled}
              />
            </div>
            <SelectField
              name="discountId"
              label="Discount"
              options={itemsToOptions(discounts)}
              loading={!isSuccess(discountsStatus)}
              disabled={disabled}
            />
            <SelectField
              name="priceId"
              label="Price"
              options={itemsToOptions(prices)}
              loading={!isSuccess(pricesStatus)}
              disabled={disabled}
            />
            {values.items.map((item, index) => (
              <div className={style("form--split")}>
                <SelectField
                  name={`items.${index}.id`}
                  label="Item"
                  size="small"
                  options={itemsToOptions(items)}
                  loading={!isSuccess(itemsStatus)}
                  disabled={disabled}
                />
                <TextField
                  name={`items.${index}.count`}
                  label="Count"
                  size="small"
                  disabled={disabled}
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
            <Actions
              onSubmit={
                !disabled && (async () => (await submitForm(), isValid))
              }
            />
          </form>
        );
      }}
    </Formik>
  );
};
