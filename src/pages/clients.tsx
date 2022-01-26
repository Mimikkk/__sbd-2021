import { Button, EmptyPage, Tile } from "shared/components";
import { useClientList } from "dedicated/hooks";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useModal } from "shared/hooks";
import { ClientForm } from "dedicated/forms";

export default () => {
  const [ClientList, ClientListContext] = useClientList();
  const [ClientModal, open] = useModal(<ClientForm />, "Add new client");

  return (
    <Tile>
      <ClientListContext>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3">Clients</Typography>
            <div style={{ display: "flex", height: "40px", columnGap: "4px" }}>
              <Button
                title="Add new client"
                icon={<AddIcon />}
                onClick={open}
              />
              <ClientModal />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            {ClientList.length != 0 ? <ClientList /> : <EmptyPage />}
          </div>
        </div>
      </ClientListContext>
    </Tile>
  );
};
