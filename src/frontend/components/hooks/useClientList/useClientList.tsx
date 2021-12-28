import { useList } from "shared/hooks";
import { columns } from "./columns";
import { Client } from "@models";
import { clientService } from "$/services";

export const useClientList = () => {
  const [Clients, Context] = useList<Client.Entity>(clientService.readAll);

  return [() => <Clients columns={[]} pagination />, Context] as const;
};
