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
import { useRefresh } from "../frontend/shared/hooks";
import {
  AddCourtForm,
  Form as FormOpenButton,
  Tile,
} from "../frontend/shared/components";

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
    Cell: <FormOpenButton title={"Edit"} icon={<EditIcon />} />,
  },
];

const isLoading = (status: RequestStatus) => {
  return status == RequestStatus.Loading;
};

const Courts = () => {
  const [shouldRefresh, refresh] = useRefresh();
  const { items, total, status } = useList(courtService.readAll, [
    shouldRefresh,
  ]);
  console.log({ items, total, status });
  return (
    <Tile>
      <Grid
        container
        spacing={2}
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
                <FormOpenButton title={"Add new court"} icon={<AddIcon />}>
                  {<AddCourtForm />}
                </FormOpenButton>
                {/*// onClick={async () => (*/}
                {/*//   await courtService.create(mockCourt()), refresh()*/}
                {/*// )}*/}
              </Grid>
              <Grid item>
                <FormOpenButton
                  title={"Find court"}
                  icon={<SearchIcon />}
                  // onClick={async () => (
                  //   await courtService.update(items[0].id, {
                  //     ...items[0],
                  //     name: faker.lorem.word(),
                  //   }),
                  //   refresh()
                  // )}
                />
                {/*<MuiButton*/}
                {/*// onClick={async () => (*/}
                {/*//   await courtService.readAll(), refresh()*/}
                {/*// )}*/}
                {/*>*/}
                {/*  Read*/}
                {/*</MuiButton>*/}
                {/*<MuiButton*/}
                {/*// onClick={async () => (*/}
                {/*//   await courtService.delete(items[0].id), refresh()*/}
                {/*// )}*/}
                {/*>*/}
                {/*  Delete*/}
                {/*</MuiButton>*/}
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
    </Tile>
  );
};

export default Courts;
