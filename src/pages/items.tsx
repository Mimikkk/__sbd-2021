import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import { Button, EmptyPage, Tile } from "shared/components";
import { useModal } from "shared/hooks";
import { ItemForm } from "dedicated/forms";
import { useItemList } from "dedicated/hooks";

export default () => {
  const [ItemList, ItemListContext] = useItemList();
  const [ItemModal, open] = useModal(<ItemForm />, "Add new item");
  return (
    <Tile>
      <ItemListContext>
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
            <Typography variant="h3">Items</Typography>
            <div style={{ display: "flex", height: "40px", columnGap: "4px" }}>
              <Button title="Add new item" icon={<AddIcon />} onClick={open} />
              <ItemModal />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            {ItemList.length != 0 ? <ItemList /> : <EmptyPage />}
          </div>
        </div>
      </ItemListContext>
    </Tile>
  );
};
