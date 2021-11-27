import { Formik } from "formik";
import { Grid, TextField } from "@mui/material";
import { FormProps } from "components/forms/types";
import { Court } from "@models";
import { courtService } from "@services";
import { courtValidationSchema } from "./Court.validation";

export const CourtForm = ({
  formRef,
  initialValues,
}: FormProps<Court.Model>) => (
  <div style={{ padding: "0em 2em" }}>
    <Formik
      initialValues={initialValues}
      validationSchema={courtValidationSchema}
      onSubmit={async (values) => await courtService.create(values)}
      innerRef={formRef}
    >
      {({ errors, touched, values, handleChange }) => (
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Grid
            container
            spacing={1.5}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid item>
              <TextField
                id="floor"
                name="floor"
                label="floor"
                value={values.floor}
                onChange={handleChange}
                error={touched.floor && Boolean(errors.floor)}
                helperText={touched.floor && errors.floor}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                id="isCovered"
                name="isCovered"
                label="isCovered"
                value={values.isCovered}
                onChange={handleChange}
                error={touched.isCovered && Boolean(errors.isCovered)}
                helperText={touched.isCovered && errors.isCovered}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                id="isUnderMaintenance"
                name="isUnderMaintenance"
                label="isUnderMaintenance"
                value={values.isUnderMaintenance}
                onChange={handleChange}
                error={
                  touched.isUnderMaintenance &&
                  Boolean(errors.isUnderMaintenance)
                }
                helperText={
                  touched.isUnderMaintenance && errors.isUnderMaintenance
                }
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                id="name"
                name="name"
                label="name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  </div>
);
