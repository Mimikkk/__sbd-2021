import { useList } from "shared/hooks";
import { columns } from "./columns";
import { Client } from "@models";
import { clientService } from "$/services";

export const useClientList = () => {
  const [Clients, Context] = useList<Client.Row>(clientService.readAll);

  return [() => <Clients columns={columns} pagination />, Context] as const;
};
