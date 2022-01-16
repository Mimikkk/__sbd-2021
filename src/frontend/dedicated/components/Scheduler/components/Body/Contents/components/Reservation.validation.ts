import { object, string, array, number } from "yup";

export const pendingSchema = object({
  clientId: string().required("Client is required").nullable(),
  discountId: string().nullable(),
  teacherId: string().nullable(),
  priceId: string().required("Price is required").nullable(),
  itemReservations: array()
    .of(
      object<any>({
        itemId: string().required("Item is required").nullable(),
        count: number().required("Count is required").min(1).nullable(),
      })
    )
    .min(0)
    .max(20)
    .required(),
}).defined();
