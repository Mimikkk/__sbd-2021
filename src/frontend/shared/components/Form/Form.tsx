import { Formik } from "formik";
import { ReactElement } from "react";
import { style } from "styles";
import { cx, isEntity } from "shared/utils";
import { Grid } from "@mui/material";
import { Actions } from "./Actions";

interface Props<T extends object> {
  children?: ReactElement;
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  onRemove?: (values: T) => void;
  validationSchema: any | (() => any);
}

export const Form = <T extends object>({
  children,
  onRemove,
  ...props
}: Props<T>) => (
  <Formik {...props} validateOnMount>
    {(props) => (
      <form className={cx(style("form"))}>
        <Grid container>
          <Grid container>{children}</Grid>
          <Grid container style={{ padding: 0 }}>
            <Actions
              onSubmit={async () => (await props.submitForm(), props.isValid)}
              onRemove={
                (isEntity(props.values) || undefined) &&
                (async () => onRemove?.(props.values))
              }
            />
          </Grid>
        </Grid>
      </form>
    )}
  </Formik>
);
