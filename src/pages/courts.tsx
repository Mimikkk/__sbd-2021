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
import EditIcon from "@mui/icons-material/Edit";

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
  {
    id: "editButton",
    Header: "Edit",
    Cell: (
      <Button
        title={"Edit"}
        icon={<EditIcon />}
        size={"small"}
        // // style={{
        // //   color: "black",
        // //   // borderColor: "rgba(124, 77, 255, 0.5)",
        // //   backgroundColor: "rgba(124, 77, 255, 0.1)",
        // //   boxShadow: "none",
        // }}
      />
    ),
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
      <Grid
        container
        spacing={1}
        style={{
          width: "100%",
          height: "fit-content",
          display: "flex",
        }}
      >
        <Grid
          item
          container
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <Typography style={{ fontSize: "2em" }}>{" Courts "}</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  title={"Add new court"}
                  icon={<AddIcon />}
                  size={"large"}
                />
              </Grid>
              <Grid item>
                <Button
                  title={"Find court"}
                  icon={<SearchIcon />}
                  size={"large"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ display: "flex", width: "100%", height: "100%" }}>
          <List
            columns={columns}
            items={items}
            pagination
            loading={isLoading(status)}
          />
        </Grid>
      </Grid>
      {/*<Grid*/}
      {/*  container*/}
      {/*  spacing={1}*/}
      {/*  style={{*/}
      {/*    display: "flex",*/}
      {/*    flexDirection: "column",*/}
      {/*    height: "100%",*/}
      {/*    alignContent: "space-between",*/}
      {/*  }}*/}
      {/*>*/}
      {/*<Grid item>*/}
      {/*  <Grid container style={{ display: "flex", justifyContent: "left" }}>*/}
      {/*    <Grid item>*/}
      {/*      <Typography style={{ fontSize: "2em" }}>{"Courts"}</Typography>*/}
      {/*    </Grid>*/}
      {/*    <Grid item>*/}
      {/*      <Grid container>*/}
      {/*        <Grid item />*/}
      {/*        <Grid item />*/}
      {/*      </Grid>*/}
      {/*    </Grid>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
      {/*<Grid*/}
      {/*  item*/}
      {/*  style={{*/}
      {/*    display: "flex",*/}
      {/*    justifyContent: "space-between",*/}
      {/*    alignItems: "center",*/}
      {/*    flexDirection: "column",*/}
      {/*  }}*/}
      {/*>*/}

      {/*  </Grid>*/}
      {/*</Grid>*/}
    </Tile>
  );
};

export default Courts;
