import { Item } from "@internal/models";
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
        count: number()
          .required("Count is required")
          .min(1)
          .test("max-items", "max-items", (value, context) => {
            const items: Item.Entity[] = (context as any).from[1].value.items;
            const item = items.find(({ id }) => context.parent.itemId === id);

            if (!item || (value || 0) <= item.reserved) return true;
            return context.createError({
              message: `Only '${item.reserved}' currently available`,
            });
          })
          .nullable(),
      })
    )
    .min(0)
    .max(20)
    .required(),
}).defined();
