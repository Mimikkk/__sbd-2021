import { Button, Tile } from "shared/components";
import { discountService, priceService } from "@services";
import { useListContext } from "shared/contexts";
import { Discount, Price } from "@models";
import faker from "faker";
import { useTransactionList, useDiscountList } from "components/hooks";

export const CreateItemButton = () => {
  const { refresh } = useListContext();

  return (
    <Button
      title={"create random"}
      onClick={async () => {
        await priceService.create({
          cost: faker.commerce.price() as any,
          description: faker.lorem.sentence(),
        });
        refresh();
      }}
    />
  );
};
export const EditItemButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<Price.Row>();

  return (
    <Button
      title={"update random"}
      onClick={async () => {
        await priceService.update(item.id, {
          cost: faker.commerce.price() as any,
          description: faker.lorem.sentence(),
        });
        refresh();
      }}
      disabled={!item}
    />
  );
};
export const DeleteItemButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<Price.Row>();

  return (
    <Button
      title={"delete random"}
      onClick={() => priceService.delete(item.id).then(refresh)}
      disabled={!item}
    />
  );
};

export const CreateDiscountButton = () => {
  const { refresh } = useListContext();

  return (
    <Button
      title={"create random"}
      onClick={async () => {
        await discountService.create({
          name: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          isPercentage: faker.random.boolean(),
          value: faker.commerce.price() as any,
        });
        refresh();
      }}
    />
  );
};
export const EditDiscountButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<Discount.Row>();

  return (
    <Button
      title={"update random"}
      onClick={async () => {
        await discountService.update(item.id, {
          name: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          isPercentage: faker.random.boolean(),
          value: faker.commerce.price() as any,
        });
        refresh();
      }}
      disabled={!item}
    />
  );
};
export const DeleteDiscountButton = () => {
  const {
    refresh,
    items: [item],
  } = useListContext<Discount.Row>();

  return (
    <Button
      title={"delete random"}
      onClick={() => discountService.delete(item.id).then(refresh)}
      disabled={!item}
    />
  );
};

export default () => {
  const [DiscountList, DiscountListContext] = useDiscountList();
  const [PriceList, PriceListContext] = useTransactionList();

  return (
    <Tile>
      <PriceListContext>
        <p>Prices</p>
        <PriceList />
        <CreateItemButton />
        <EditItemButton />
        <DeleteItemButton />
      </PriceListContext>
      <DiscountListContext>
        <p>Discounts</p>
        <DiscountList />
        <CreateDiscountButton />
        <EditDiscountButton />
        <DeleteDiscountButton />
      </DiscountListContext>
    </Tile>
  );
};
