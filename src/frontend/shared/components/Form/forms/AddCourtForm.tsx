import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { Grid, MenuItem, TextField } from "@mui/material";
import * as React from "react";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const AddCourtForm = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  return (
    <div style={{ padding: "0em 2em" }}>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <FormikForm
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <Grid
              container
              spacing={1.5}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid item>
                <TextField
                  name="name"
                  required
                  id="outlined-required"
                  label="Name"
                  defaultValue="Hello World"
                  style={{ width: "100%" }}
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </Grid>
              <Grid item>
                <TextField
                  name="floor"
                  required
                  id="outlined-required"
                  label="Floor"
                  defaultValue="Clay"
                  style={{ width: "100%" }}
                />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </Grid>
              <Grid item>
                <TextField
                  name="email"
                  type=" isCovered"
                  style={{ width: "100%" }}
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={currency}
                  onChange={handleChange}
                  helperText="Please select your currency"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {/*<Grid item>*/}
              {/*  <MuiButton type="submit">Submit</MuiButton>*/}
              {/*</Grid>*/}
            </Grid>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};
