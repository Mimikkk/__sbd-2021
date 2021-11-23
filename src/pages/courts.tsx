import { Button, Tile } from "shared/components";
import { Column, List } from "shared/components/List";
import { BoolCell } from "shared/components/List/components";
import { Court } from "@models";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, Typography } from "@mui/material";
import { courtService } from "@services";
import { useList } from "shared/hooks/useList";
import { RequestStatus } from "@internal/enums";

const columns: Column<Court.Entity>[] = [
  {
    accessor: "name",
    Header: "Name",
  },
  {
    accessor: "floor",
    Header: "Floor type",
  },
  {
    accessor: "isCovered",
    Header: "Cover",
    Cell: BoolCell,
  },
  {
    accessor: "isUnderMaintenance",
    Header: "Available",
    Cell: BoolCell,
  },
];

const isLoading = (status: RequestStatus) => {
  return status == RequestStatus.Loading;
};

const Courts = () => {
  const { items, total, status } = useList(courtService.readAll);
  console.log({ items, total, status });
  return (
    <Tile>
      <Grid container style={{ width: "100%", flexDirection: "column" }}>
        <Grid
          item
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            style={{
              display: "flex",
              width: "100%",
              alignContent: "left",
              margin: "10px",
            }}
          >
            <Typography style={{ fontSize: "2em" }}>{"Courts"}</Typography>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Grid item>
              <Button title="Add new court" icon={<AddIcon />} />
            </Grid>
            <Grid item>
              <Button title="Find court" icon={<SearchIcon />} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ width: "100%", height: "100%" }}>
          <List
            columns={columns}
            items={items}
            pagination
            loading={isLoading(status)}
          />
        </Grid>
      </Grid>
    </Tile>
  );
};

export default Courts;
