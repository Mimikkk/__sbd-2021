import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import { Button, Tile } from "shared/components";
import { useModal } from "shared/hooks";
import { DiscountForm } from "dedicated/forms";
import { useDiscountList } from "dedicated/hooks";

export default () => {
  const [DiscountList, DiscountListContext] = useDiscountList();
  const [DiscountModal, open] = useModal(<DiscountForm />, "Add new discount");

  return (
    <Tile>
      <DiscountListContext>
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
            <Typography variant="h3">Discounts</Typography>
            <div style={{ display: "flex", height: "40px", columnGap: "4px" }}>
              <Button
                title="Add new discount"
                icon={<AddIcon />}
                onClick={open}
              />
              <DiscountModal />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <DiscountList />
          </div>
        </div>
      </DiscountListContext>
    </Tile>
  );
};
