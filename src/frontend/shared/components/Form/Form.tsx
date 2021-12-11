import { Formik } from "formik";
import { ReactElement } from "react";
import { style } from "styles";
import { cx } from "shared/utils";
import { Grid } from "@mui/material";
import { Actions } from "./Actions";

interface Props<T extends object> {
  children?: ReactElement;
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  validationSchema: any | (() => any);
}
export const Form = <T extends object>({ children, ...props }: Props<T>) => (
  <Formik {...props}>
    {(props) => (
      <form className={cx(style("form"))}>
        <Grid container>
          <Grid item>{children}</Grid>
          <Grid item>
            <Actions onSubmit={props.submitForm} />
          </Grid>
        </Grid>
      </form>
    )}
  </Formik>
);
