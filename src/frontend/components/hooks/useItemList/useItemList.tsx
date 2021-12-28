import { useList } from "shared/hooks";
import { columns } from "./columns";
import { Item } from "@models";
import { itemService } from "$/services";

export const useItemList = () => {
  const [Items, Context] = useList<Item.Row>(itemService.readAll);

  return [() => <Items columns={columns} pagination />, Context] as const;
};
