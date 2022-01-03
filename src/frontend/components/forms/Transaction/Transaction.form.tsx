import { Grid } from "@mui/material";
import { FormProps } from "components/forms/types";
import { Transaction } from "@models";
import { transactionService } from "@services";
import { TransactionSchema } from "./Transaction.validation";
import { isEntity } from "shared/utils";
import { Form, TextField } from "shared/components";
import { useListContext } from "shared/contexts";

const createTransactionValues = <T extends Transaction.Model>(): T =>
  ({
    clientId: "",
    cost: 0,
    discountId: "",
    reservationId: ""
  } as T);

export const TransactionForm = <T extends Transaction.Model>({
                                                   initialValues,
                                                 }: FormProps<T>) => {
  const { refresh } = useListContext();

  const handleSuccess = async (values: T) => (
    await (isEntity(values)
      ? transactionService.update(values.id, values)
      : transactionService.create(values)),
      refresh()
  );

  const handleRemove = async (values: T) => (
    await (isEntity(values) && transactionService.delete(values.id)), refresh()
  );

  return (
    <Form
      validationSchema={TransactionSchema}
      initialValues={initialValues || createTransactionValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <Grid container spacing={2.5}>

        <Grid item xs={12}>
          <TextField name="description" label="Service" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="cost" label="Value" />
        </Grid>
      </Grid>
    </Form>
  );
};
