import { useList } from "shared/hooks";
import { columns } from "./columns";
import { Client } from "@models";
import { clientService } from "$/services";

export const useClientList = () => {
  const [Items, Context] = useList<Client.Row>(clientService.readAll);

  return [() => <Items columns={columns} pagination />, Context] as const;
};
