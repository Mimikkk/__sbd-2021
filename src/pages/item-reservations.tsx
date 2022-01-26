import { EmptyPage, Tile } from "shared/components";
import { useItemReservationList } from "dedicated/hooks";
import { Typography } from "@mui/material";

export default () => {
  const [ItemReservationList, ItemReservationListContext] =
    useItemReservationList();

  return (
    <Tile>
      <ItemReservationListContext>
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
            <Typography variant="h3">Item reservations</Typography>
          </div>

          <div style={{ flex: 1 }}>
            {ItemReservationList.length !== 0 ? (
              <ItemReservationList />
            ) : (
              <EmptyPage />
            )}
          </div>
        </div>
      </ItemReservationListContext>
    </Tile>
  );
};
