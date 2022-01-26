import { useCourtReservationList } from "dedicated/hooks";
import { EmptyPage, Tile } from "shared/components";
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
            {CourtReservationList.length !== 0 ? (
              <CourtReservationList />
            ) : (
              <EmptyPage />
            )}
          </div>
        </div>
      </CourtReservationListContext>
    </Tile>
  );
};
