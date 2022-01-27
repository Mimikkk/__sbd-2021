import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import { Button, Tile } from "shared/components";
import { useModal } from "shared/hooks";
import { PriceForm } from "dedicated/forms";
import { usePriceList } from "dedicated/hooks";

export default () => {
  const [PriceList, PriceListContext] = usePriceList();
  const [PriceModal, open] = useModal(<PriceForm />, "Add new service");

  return (
    <Tile>
      <PriceListContext>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            rowGap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="h3">Prices</Typography>
            <div style={{ display: "flex", height: "40px", columnGap: "4px" }}>
              <Button
                title="Add new service"
                icon={<AddIcon />}
                onClick={open}
              />
              <PriceModal />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <PriceList />
          </div>
        </div>
      </PriceListContext>
    </Tile>
  );
};
