import { useList } from "shared/hooks";
import { courtService } from "@services";
import { columns } from "./columns";
import { Court } from "@models";

export const useCourtList = () => {
  const [Courts, Context] = useList<Court.Row>(courtService.readAll);

  return [() => <Courts columns={columns} pagination />, Context] as const;
};
