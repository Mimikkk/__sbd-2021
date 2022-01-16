import { Price } from "@models";
import { Option } from "./types";
import { uuid } from "@internal/types";

export const pricesToOptions = (prices: Price.Entity[]): Option<uuid>[] =>
  prices.map(priceToOption);

export const priceToOption = (price: Price.Entity): Option<uuid> => ({
  value: price.id,
  label: `${price.name} - ${price.cost.toFixed(2)}zł`,
});
