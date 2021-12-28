import { Tile } from "shared/components";
import { useClientList } from "components/hooks/useClientList";

export default () => {
  const [ClientList, ClientListContext] = useClientList();

  return (
    <Tile>
      <ClientListContext>
        <ClientList />
      </ClientListContext>
    </Tile>
  );
};
