import { Button, Tile, List, BoolCell, Column } from "shared/components";
import { useList, useRefresh } from "shared/hooks";
import { Court } from "@models";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, Button as MuiButton, Typography } from "@mui/material";
import { courtService } from "@services";
import { mockCourt } from "@models/values";
import faker from "faker";

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

const Courts = () => {
  const [isRefreshing, refresh] = useRefresh();
  const { items, total, status } = useList(courtService.readAll, [
    isRefreshing,
  ]);

  return (
    <Tile>
      <Grid container style={{ width: "100%" }}>
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
        <Grid item style={{ width: "100%" }}>
          <List columns={columns} items={items} pagination />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <MuiButton
            onClick={async () => (
              await courtService.create(mockCourt()), refresh()
            )}
          >
            Create
          </MuiButton>
          <MuiButton
            onClick={async () => (await courtService.readAll(), refresh())}
          >
            Read
          </MuiButton>
          <MuiButton
            onClick={async () => (
              await courtService.update(items[0].id, {
                ...items[0],
                name: faker.lorem.word(),
              }),
              refresh()
            )}
          >
            Update
          </MuiButton>
          <MuiButton
            onClick={async () => (
              await courtService.delete(items[0].id), refresh()
            )}
          >
            Delete
          </MuiButton>
        </Grid>
      </Grid>
    </Tile>
  );
};

export default Courts;
