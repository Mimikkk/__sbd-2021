import { Column, List } from "shared/components/List";
import { BoolCell } from "shared/components/List/components";
import { Court } from "@models";
import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography } from "@mui/material";
import { courtService } from "@services";
import { useList } from "shared/hooks/useList";
import { RequestStatus } from "@internal/enums";
import EditIcon from "@mui/icons-material/Edit";
import { Form as FormButton, Tile } from "shared/components";
import { CourtForm } from "components/forms";
import { useRef } from "react";
import { Nullable } from "@internal/types";
import { FormikProps } from "formik";
import { courtValidationSchema } from "components/forms/Court/Court.validation";

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
    Cell: (row: any) => {
      const formRef = useRef<Nullable<FormikProps<any>>>(null);
      console.log(row);

      return (
        <FormButton title={"Edit"} icon={<EditIcon />} formRef={formRef}>
          <CourtForm
            formRef={formRef}
            initialValues={createCourtValues()}
            validationSchema={courtValidationSchema}
          />
        </FormButton>
      );
    },
  },
];

const createCourtValues = () => ({
  name: "",
  floor: "",
  isCovered: false,
  isUnderMaintenance: false,
});

const isLoading = (status: RequestStatus) => {
  return status == RequestStatus.Loading;
};

const Courts = () => {
  const { items, status } = useList(courtService.readAll);

  const formRef = useRef<Nullable<FormikProps<any>>>(null);

  return (
    <Tile>
      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid item container justifyContent={"space-between"}>
          <Grid item>
            <Typography style={{ fontSize: "2em" }}>{" Courts "}</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <FormButton
                  title={"Add new court"}
                  icon={<AddIcon />}
                  formRef={formRef}
                >
                  <CourtForm
                    formRef={formRef}
                    initialValues={createCourtValues()}
                    validationSchema={courtValidationSchema}
                  />
                </FormButton>
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
