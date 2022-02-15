import { Price } from "@models";
import { Option } from "./types";
import { uuid } from "@internal/types";

export const servicePricesToOptions = (
  prices: Price.Entity[]
): Option<uuid>[] => prices.map(servicePriceToOption);

export const servicePriceToOption = (price: Price.Entity): Option<uuid> => ({
  value: price.id,
  label: `${price.name} - ${price.cost.toFixed(2)}zł per 30 minutes`,
});

export const itemPricesToOptions = (prices: Price.Entity[]): Option<uuid>[] =>
  prices.map(itemPriceToOption);

export const itemPriceToOption = (price: Price.Entity): Option<uuid> => ({
  value: price.id,
  label: `${price.name} - ${price.cost.toFixed(2)}zł per item`,
});
