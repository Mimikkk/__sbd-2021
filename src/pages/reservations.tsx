import { useCourtReservationList } from "dedicated/hooks";
import { Tile } from "shared/components";
import { Typography } from "@mui/material";

export default () => {
  const [CourtReservationList, CourtReservationListContext] =
    useCourtReservationList();

  return (
    <Tile>
      <CourtReservationListContext>
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
            <Typography variant="h3">Court reservations</Typography>
          </div>

          <div style={{ flex: 1 }}>
            <CourtReservationList />
          </div>
        </div>
      </CourtReservationListContext>
    </Tile>
  );
};
