import { useList } from "shared/hooks";
import { courtService } from "@services";
import { columns } from "./columns";
import { Court } from "@models";

export const useCourtList = () => {
  const [Items, Context] = useList<Court.Row>(courtService.readAll);

  return [() => <Items columns={columns} pagination />, Context] as const;
};
